import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { downloadCv } from '../../utils/cv';
import { fadeUp } from '../../lib/animations';
import avatar from '../../assets/profile/avatar.png';
import { CodeWindow } from './CodeWindow';

export function Hero() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];
  const nameParts = portfolio.name.split(' ');
  const first = nameParts.slice(0, -1).join(' ');
  const last = nameParts.slice(-1)[0];

  const stackBadge = portfolio.stats[1];
  const langBadge = portfolio.stats[2];

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
        className="hero-side glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-side__top">
          <div className="hero-photo">
            <img src={avatar} alt={`${portfolio.name} profile photo`} width={240} height={240} />
          </div>
          <div className="hero-side__badges">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>{stackBadge.value}</span>
              <em>· {stackBadge.label}</em>
            </div>
            <div className="hero-badge secondary">
              <Sparkles size={14} />
              <span>{langBadge.value}</span>
              <em>· {langBadge.label}</em>
            </div>
          </div>
        </div>
        <CodeWindow />
      </motion.div>
    </section>
  );
}
