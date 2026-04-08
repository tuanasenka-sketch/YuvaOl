import { Link } from 'react-router-dom';
import { Home, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-panel" style={{ 
      position: 'sticky', 
      top: '1rem', 
      zIndex: 50, 
      margin: '0 1.5rem',
      borderRadius: '20px'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Home color="var(--accent-primary)" size={28} strokeWidth={2.5} />
          <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Yuva<span style={{ color: 'var(--accent-primary)' }}>Ol</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link to="/adopt">Yuva Arayanlar</Link>
          <Link to="/urgent" style={{ color: 'var(--danger)' }}>Acil İlanlar</Link>
          <Link to="/support">Tedavi & Bağış</Link>
          <Link to="/lost-and-found">Kayıp</Link>
          <Link to="/create-listing" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>İlan Ver</Link>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem' }}>
            {localStorage.getItem('isAuthenticated') === 'true' ? (
              <Link to="/profile" title="Profilim">
                <div style={{ width: '36px', height: '36px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>T</div>
              </Link>
            ) : (
              <Link to="/login" title="Giriş Yap"><User size={20} /></Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
