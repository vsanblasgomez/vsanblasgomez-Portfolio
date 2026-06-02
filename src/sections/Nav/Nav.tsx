import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { LanguageSelector, ThemeToggle } from '../../components';

export function Nav() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <nav className="nav glass-card">
      <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand-mark">{portfolio.initials}</span>
        <strong>{portfolio.name}</strong>
      </a>
      <div className="nav-links">
        <a href="#projects">{copy.nav[0]}</a>
        <a href="#skills">{copy.nav[1]}</a>
        <a href="#contact">{copy.nav[2]}</a>
      </div>
      <div className="nav-actions">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </nav>
  );
}
