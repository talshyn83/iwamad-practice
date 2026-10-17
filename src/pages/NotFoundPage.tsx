import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>404 - Page Not Found</h2>
      <p>Ой! Кажется, такой страницы не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}