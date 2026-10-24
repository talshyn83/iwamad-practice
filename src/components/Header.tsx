import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header" style={{ borderBottom: '1px solid #ddd', padding: '16px 20px', display: 'flex', justifyContent: 'center' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</NavLink>
        <NavLink to="/skills" style={{ textDecoration: 'none', color: '#333' }}>Skills</NavLink>
        <NavLink to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</NavLink>
        <NavLink to="/register" style={{ textDecoration: 'none', color: '#333' }}>Register</NavLink>
        <NavLink to="/events" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Events</NavLink>
      </nav>
    </header>
  );
}