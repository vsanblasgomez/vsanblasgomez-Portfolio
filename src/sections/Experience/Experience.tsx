import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { SectionTitle } from '../../components';
import { TimelineItem } from './TimelineItem';

export function Experience() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  return (
    <section id="experience" className="section">
      <SectionTitle index="04" {...copy.sections.experience} />
      <div className="timeline">
        {portfolio.experience.map((item, index) => (
          <TimelineItem key={`${item.company}-${item.period}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
