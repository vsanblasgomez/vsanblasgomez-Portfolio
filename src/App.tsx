import { useLanguage } from './hooks/useLanguage';
import { portfolios, uiCopy } from './data/portfolio';
import { BackgroundPaths } from './components/BackgroundPaths';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';

function App() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <main className="app-shell">
      <BackgroundPaths pathCount={36} layers={2} />

      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      <Nav />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <footer>
        <span>
          © 2026 {portfolio.name}. {copy.footer}
        </span>
      </footer>
    </main>
  );
}

export default App;
