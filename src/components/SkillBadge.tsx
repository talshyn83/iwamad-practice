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

export default function SkillBadge({ skill, isActive, onClick }: SkillBadgeProps) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        padding: '8px 16px', 
        border: isActive ? '2px solid #646cff' : '1px solid white', 
        borderRadius: '20px', 
        display: 'inline-block',
        cursor: 'pointer',
        backgroundColor: isActive ? 'rgba(100, 108, 255, 0.1)' : 'transparent'
      }}
    >
      {skill.label} — {skill.level}
    </div>
  );
}

export type { Skill };