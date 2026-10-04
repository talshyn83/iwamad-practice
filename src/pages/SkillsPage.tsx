import SkillBadge from '../components/SkillBadge';
import type { Skill } from '../components/SkillBadge';

const skills: Skill[] = [
  { id: 1, label: "HTML", level: "Intermediate" },
  { id: 2, label: "Python", level: "Intermediate" },
  { id: 3, label: "AWS", level: "Intermediate" },
  { id: 4, label: "Jupyter Notebook", level: "Intermediate" },
];

export default function SkillsPage() {
  return (
    <div className="page-container">
      <h2>My Skills</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {skills.map((skill) => (
          <SkillBadge 
            key={skill.id} 
            skill={skill} 
            isActive={false} 
            onClick={() => {}} 
          />
        ))}
      </div>
    </div>
  );
}