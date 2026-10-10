import React from 'react'
import { Tag } from './ui/Tag'

interface SkillBadgeProps {
  skill: string
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return <Tag label={skill} />
}