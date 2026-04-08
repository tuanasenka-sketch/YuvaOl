import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const linkStyle = {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'var(--transition-fast)',
    fontSize: '0.95rem',
    display: 'inline-block'
  };

  const hoverEffect = (e) => {
    e.target.style.color = 'var(--accent-primary)';
    e.target.style.transform = 'translateX(5px)';
  };

  const resetEffect = (e) => {
    e.target.style.color = 'var(--text-secondary)';
    e.target.style.transform = 'translateX(0)';
  };

  return (
    <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', padding: '3rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home color="var(--accent-primary)" size={24} strokeWidth={2.5} /> 
            Yuva<span style={{ color: 'var(--accent-primary)' }}>Ol</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
            Türkiye'nin en modern ve güvenilir hayvan sahiplendirme platformu.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Keşfet</h4>
            <Link to="/adopt" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>Sahiplen</Link>
            <Link to="/urgent" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>Acil Yuva</Link>
            <Link to="/support" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>Bağış Yap</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Kurumsal</h4>
            <Link to="/about" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>Hakkımızda</Link>
            <Link to="/faq" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>S.S.S</Link>
            <Link to="/contact" style={linkStyle} onMouseEnter={hoverEffect} onMouseLeave={resetEffect}>İletişim</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        © 2026 YuvaOl Platformu. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
