import type { CSSProperties, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Card({ children, className = '', style }: CardProps) {
  return (
    <article className={`card ${className}`.trim()} style={style}>
      {children}
    </article>
  );
}