import React, { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}