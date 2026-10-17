import { NavLink } from 'react-router-dom';
import { useLikes } from '../context/LikesContext';
import '../styles/ui.css'; // <--- Добавьте эту строчку, чтобы подтянуть стили

export function Header() {
  const { likes } = useLikes();

  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <div>Likes: {likes}</div>
    </header>
  );
}