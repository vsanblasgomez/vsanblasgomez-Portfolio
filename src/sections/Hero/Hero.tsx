import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { downloadCv } from '../../utils/cv';
import { fadeUp } from '../../lib/animations';
import { CodeWindow, HeroBadge } from './CodeWindow';

export function Hero() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];
  const nameParts = portfolio.name.split(' ');
  const first = nameParts.slice(0, -1).join(' ');
  const last = nameParts.slice(-1)[0];

  return (
    <section id="home" className="hero section-grid">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <span className="status-pill">
          <Sparkles size={16} /> {copy.status}
        </span>
        <h1>
          <span className="hero-name">{first}</span>{' '}
          <span className="hero-name">
            <span className="last">{last}</span>
          </span>
        </h1>
        <p className="hero-role">{portfolio.role}</p>
        <p className="hero-summary">{portfolio.summary}</p>
        <div className="stat-strip">
          {portfolio.stats.map((stat) => (
            <motion.div key={stat.label} className="stat-pill" whileHover={{ y: -4, scale: 1.02 }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            {copy.primaryCta} <ArrowDown size={17} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            {copy.contactCta} <Mail size={17} />
          </a>
          <button className="btn btn-ghost" onClick={() => downloadCv(portfolio)}>
            {copy.cvCta} <Download size={17} />
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hero-panel glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroBadge value={portfolio.stats[1].value} label={portfolio.stats[1].label} />
        <HeroBadge value={portfolio.stats[2].value} label={portfolio.stats[2].label} variant="secondary" />
        <CodeWindow />
      </motion.div>
    </section>
  );
}
