import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';

const mySkills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'AWS', level: 'Beginner' }
];

export function SkillsPage() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  return (
    <Card style={{ textAlign: 'center', maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '24px' }}>My Skills</h1>
      
      <div style={{ marginBottom: '24px' }}>
        {mySkills.map((skill) => (
          <Tag 
            key={skill.name} 
            label={skill.name} 
            onClick={() => setActiveLevel(`${skill.name} level: ${skill.level}`)} 
          />
        ))}
      </div>

      {activeLevel && (
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
          {activeLevel}
        </p>
      )}
    </Card>
  );
}