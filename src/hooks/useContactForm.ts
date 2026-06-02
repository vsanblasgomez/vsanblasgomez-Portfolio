import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ContactError,
  getRateLimitState,
  recordSubmission,
  sendContactMessage,
  type ContactPayload,
  type RateLimitState,
} from '../utils/contact';

export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';

export type UseContactFormResult = {
  name: string;
  email: string;
  message: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
  status: ContactStatus;
  feedback: string;
  cooldownSeconds: number;
  isLocked: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

type FormCopy = {
  success: string;
  errorRequired: string;
  errorEmail: string;
  errorCooldown: (seconds: number) => string;
  errorLimit: string;
  errorGeneric: string;
  errorConfig: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function useContactForm(copy: FormCopy): UseContactFormResult {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<ContactStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [rateLimit, setRateLimit] = useState<RateLimitState>({ status: 'ok' });
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const initial = getRateLimitState();
    setRateLimit(initial);
    if (initial.status === 'cooldown') setCooldownSeconds(initial.remainingSeconds);
  }, []);

  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = window.setTimeout(() => setCooldownSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [cooldownSeconds]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!name.trim() || !email.trim() || !message.trim()) {
        setStatus('error');
        setFeedback(copy.errorRequired);
        return;
      }

      if (!EMAIL_REGEX.test(email.trim())) {
        setStatus('error');
        setFeedback(copy.errorEmail);
        return;
      }

      const current = getRateLimitState();
      setRateLimit(current);
      if (current.status === 'limit') {
        setStatus('error');
        setFeedback(copy.errorLimit);
        return;
      }
      if (current.status === 'cooldown') {
        setCooldownSeconds(current.remainingSeconds);
        setStatus('error');
        setFeedback(copy.errorCooldown(current.remainingSeconds));
        return;
      }

      setStatus('sending');
      setFeedback('');

      const payload: ContactPayload = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        honeypot: honeypotRef.current?.value,
      };

      try {
        await sendContactMessage(payload);
        recordSubmission();
        setStatus('success');
        setFeedback(copy.success);
        setName('');
        setEmail('');
        setMessage('');
        setRateLimit({ status: 'cooldown', remainingSeconds: Math.ceil(60) });
        setCooldownSeconds(60);
      } catch (error) {
        setStatus('error');
        if (error instanceof ContactError) {
          if (error.code === 'config') setFeedback(copy.errorConfig);
          else setFeedback(copy.errorGeneric);
        } else {
          setFeedback(copy.errorGeneric);
        }
      }
    },
    [copy, email, message, name],
  );

  const isLocked = status === 'sending' || cooldownSeconds > 0 || rateLimit.status === 'limit';

  return {
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
    status,
    feedback,
    cooldownSeconds,
    isLocked,
    handleSubmit,
  };
}
