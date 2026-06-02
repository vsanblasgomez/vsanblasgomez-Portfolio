const COOLDOWN_MS = 60_000;
const DAILY_LIMIT = 5;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'neon-portfolio-contact-history';

export type RateLimitState =
  | { status: 'ok' }
  | { status: 'cooldown'; remainingSeconds: number }
  | { status: 'limit' };

export function getRateLimitState(): RateLimitState {
  if (typeof window === 'undefined') return { status: 'ok' };
  const now = Date.now();
  const history = readHistory().filter((timestamp) => now - timestamp < WINDOW_MS);
  if (history.length >= DAILY_LIMIT) return { status: 'limit' };
  const last = history[history.length - 1];
  if (last && now - last < COOLDOWN_MS) {
    return { status: 'cooldown', remainingSeconds: Math.ceil((COOLDOWN_MS - (now - last)) / 1000) };
  }
  return { status: 'ok' };
}

export function recordSubmission() {
  if (typeof window === 'undefined') return;
  const now = Date.now();
  const history = readHistory().filter((timestamp) => now - timestamp < WINDOW_MS);
  history.push(now);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function readHistory(): number[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((value) => typeof value === 'number') : [];
  } catch {
    return [];
  }
}

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
};

export class ContactError extends Error {
  constructor(message: string, public code: 'config' | 'network' | 'rejected' | 'rate-limit') {
    super(message);
    this.name = 'ContactError';
  }
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  if (!accessKey) {
    throw new ContactError('Missing VITE_WEB3FORMS_KEY', 'config');
  }

  if (payload.honeypot) {
    return;
  }

  let response: Response;
  try {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nuevo mensaje de ${payload.name} desde el portfolio`,
        from_name: 'Portfolio Contact Form',
        replyto: payload.email,
        name: payload.name,
        email: payload.email,
        message: payload.message,
        botcheck: '',
      }),
    });
  } catch {
    throw new ContactError('Network error', 'network');
  }

  let result: { success?: boolean; message?: string } = {};
  try {
    result = await response.json();
  } catch {
    throw new ContactError('Invalid response from server', 'network');
  }

  if (!response.ok || !result.success) {
    throw new ContactError(result.message || 'Submission rejected', 'rejected');
  }
}
