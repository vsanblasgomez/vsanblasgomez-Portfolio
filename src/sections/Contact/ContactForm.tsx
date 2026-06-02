import { useRef, type ReactNode } from 'react';
import { AlertCircle, Loader2, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import type { UiCopy } from '../../data/portfolio';

type ContactFormProps = {
  copy: UiCopy['contactForm'];
};

export function ContactForm({ copy }: ContactFormProps) {
  const form = useContactForm(copy);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const buttonClass = `btn btn-primary${
    form.status === 'success' ? ' is-success' : ''
  }${form.status === 'error' ? ' is-error' : ''}`;

  const buttonContent: ReactNode =
    form.status === 'sending' ? (
      <>
        {copy.sending} <Loader2 size={17} className="spin" />
      </>
    ) : form.cooldownSeconds > 0 ? (
      <>
        {copy.send} ({form.cooldownSeconds}s)
      </>
    ) : (
      <>
        {copy.send} <Send size={17} />
      </>
    );

  return (
    <form className="contact-form glass-card" onSubmit={form.handleSubmit} noValidate>
      <input
        ref={honeypotRef}
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <label>
        {copy.name}
        <input
          value={form.name}
          onChange={(event) => form.setName(event.target.value)}
          placeholder={copy.namePlaceholder}
          maxLength={80}
          required
          disabled={form.isLocked}
        />
      </label>

      <label>
        {copy.email}
        <input
          type="email"
          value={form.email}
          onChange={(event) => form.setEmail(event.target.value)}
          placeholder={copy.emailPlaceholder}
          maxLength={120}
          required
          disabled={form.isLocked}
        />
      </label>

      <label>
        {copy.message}
        <textarea
          value={form.message}
          onChange={(event) => form.setMessage(event.target.value)}
          placeholder={copy.messagePlaceholder}
          rows={5}
          maxLength={2000}
          required
          disabled={form.isLocked}
        />
      </label>

      <button className={buttonClass} type="submit" disabled={form.isLocked}>
        {buttonContent}
      </button>

      <AnimatePresence>
        {form.feedback && (
          <motion.p
            key={form.feedback}
            className={`form-feedback ${form.status === 'success' ? 'success' : 'error'}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            role="status"
          >
            {form.status === 'error' && <AlertCircle size={14} />}
            {form.feedback}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
