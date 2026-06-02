import { useLanguage } from '../../hooks/useLanguage';
import { portfolios, uiCopy } from '../../data/portfolio';
import { SectionTitle } from '../../components';
import { InfiniteSlider } from '../../components/InfiniteSlider';
import { ProgressiveBlur } from '../../components/ProgressiveBlur';
import { SkillPill } from './SkillCategory';

export function Skills() {
  const { language } = useLanguage();
  const portfolio = portfolios[language];
  const copy = uiCopy[language];

  const flatSkills = Object.values(portfolio.skills).flat();

  return (
    <section id="skills" className="section">
      <SectionTitle index="03" {...copy.sections.skills} />
      <div className="skills-slider">
        <span className="skills-slider__edge skills-slider__edge--top" aria-hidden="true" />
        <span className="skills-slider__edge skills-slider__edge--bottom" aria-hidden="true" />

        <InfiniteSlider
          gap={44}
          duration={20}
          durationOnHover={40}
          className="skills-slider__track"
        >
          {flatSkills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          direction="left"
          blurIntensity={1.2}
          blurLayers={6}
          className="skills-slider__blur skills-slider__blur--left"
        />
        <ProgressiveBlur
          direction="right"
          blurIntensity={1.2}
          blurLayers={6}
          className="skills-slider__blur skills-slider__blur--right"
        />
      </div>
    </section>
  );
}
