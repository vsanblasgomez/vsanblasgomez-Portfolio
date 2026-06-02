import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { SectionTitle } from '../../components';
import { SkillCategory } from './SkillCategory';

export function Skills() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <section id="skills" className="section section-grid">
      <SectionTitle index="03" {...copy.sections.skills} />
      <div className="skill-grid">
        {Object.entries(portfolio.skills).map(([category, skills]) => (
          <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}
