import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', backgroundColor: '#fcfcfc' }}>
      <Header />
      <main style={{ 
        flex: 1, 
        width: '100%', 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        boxSizing: 'border-box',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}