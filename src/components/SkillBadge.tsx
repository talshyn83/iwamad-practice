type Skill = {
  id: number;
  label: string;
  level: string;
};

type SkillBadgeProps = {
  skill: Skill;
  isActive: boolean;
  onClick: () => void;
};

function SkillBadge({ skill, isActive, onClick }: SkillBadgeProps) {
  return (
    <li>
      <button
        type="button"
        className={isActive ? "skill-badge active" : "skill-badge"}
        onClick={onClick}
      >
        {skill.label}
      </button>
    </li>
  );
}

export type { Skill };
export default SkillBadge;