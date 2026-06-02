import { getSkillIcon } from '../../utils/skillIcons';

type SkillPillProps = {
  skill: string;
};

export function SkillPill({ skill }: SkillPillProps) {
  const Icon = getSkillIcon(skill);
  return (
    <div className="skill-pill">
      <Icon className="skill-pill__icon" strokeWidth={1.5} aria-hidden="true" />
      <span className="skill-pill__name">{skill}</span>
    </div>
  );
}
