import { NavLink } from 'react-router-dom';
import { useLikes } from '../context/LikesContext';

export function Header() {
  const { likes } = useLikes();

  return (
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <div>Likes: {likes}</div>
    </header>
  );
}