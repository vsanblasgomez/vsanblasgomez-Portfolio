import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { languageOptions } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const current = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <div className="language-select" ref={wrapperRef}>
      <button
        type="button"
        className="language-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((value) => !value)}
      >
        <Languages size={16} />
        <span>{current.label}</span>
        <ChevronDown size={14} className={open ? 'chevron open' : 'chevron'} />
      </button>
      {open && (
        <motion.ul
          className="language-menu glass-card"
          role="listbox"
          initial={{ opacity: 0, y: -6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {languageOptions.map((option) => {
            const isActive = option.code === language;
            return (
              <li key={option.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={isActive ? 'language-option active' : 'language-option'}
                  onClick={() => {
                    setLanguage(option.code);
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isActive && <Check size={14} />}
                </button>
              </li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
}
