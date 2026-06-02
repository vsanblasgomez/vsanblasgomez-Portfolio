import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Language } from '../data/portfolio';

const storageKey = 'neon-portfolio-language';
const fallbackLanguage: Language = 'es';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return fallbackLanguage;
  const saved = window.localStorage.getItem(storageKey);
  if (saved === 'es' || saved === 'en' || saved === 'ca') return saved;
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : fallbackLanguage;
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
