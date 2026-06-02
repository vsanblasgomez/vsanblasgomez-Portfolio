import { motion } from 'framer-motion';
import type { Experience } from '../../data/portfolio';

type TimelineItemProps = {
  item: Experience;
  index: number;
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.article
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <span className="timeline-dot" />
      <div className="glass-card timeline-card">
        <span className="period">{item.period}</span>
        <h3>{item.role}</h3>
        <span className="company">{item.company}</span>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}
