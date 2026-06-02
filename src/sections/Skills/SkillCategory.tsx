import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

type SkillCategoryProps = {
  category: string;
  skills: string[];
};

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <motion.div
      className="skill-card glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <h3>{category}</h3>
      {skills.map((skill, index) => (
        <div className="skill-bar" key={skill}>
          <span>{skill}</span>
          <div>
            <i style={{ width: `${92 - index * 6}%` }} />
          </div>
        </div>
      ))}
    </motion.div>
  );
}
