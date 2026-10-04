import { Outlet, NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

export default function Layout() {
  const { likes } = useLikes(); // Отображение счетчика в хедере

  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid #444', marginBottom: '20px' }}>
  <nav style={{ display: 'flex', gap: '20px' }}>
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
    <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
  </nav>
  <div style={{ fontWeight: 'bold' }}>Likes: {likes}</div>
</header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>Footer Content</footer>
    </>
  );
}