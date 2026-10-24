import type { CSSProperties, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties; // Разрешаем передавать style
};

export function Card({ children, className = '', style }: CardProps) {
  return (
    <div className={`card ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}