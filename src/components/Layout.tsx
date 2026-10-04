import { Outlet, NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

export default function Layout() {
  const { likes } = useLikes(); // Отображение счетчика в хедере

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <div>Likes: {likes}</div>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>Footer Content</footer>
    </>
  );
}