import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';

type SectionTitleProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ index, eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="section-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">
        <em>{index}</em> {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}
