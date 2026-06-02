import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
      <span className="toggle-thumb">{theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}</span>
    </button>
  );
}
