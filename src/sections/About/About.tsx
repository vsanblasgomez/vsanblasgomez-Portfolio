import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';
import { SectionTitle } from '../../components';

export function About() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <section id="about" className="section section-grid about-grid">
      <SectionTitle index="01" {...copy.sections.about} />
      <motion.div
        className="glass-card about-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p>{portfolio.about}</p>
        <div className="stack-cloud">
          {portfolio.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
