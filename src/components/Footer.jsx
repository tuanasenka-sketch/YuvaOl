import { Home } from 'lucide-react';

export default function Footer() {
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
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Keşfet</h4>
            <a href="/adopt">Sahiplen</a>
            <a href="/urgent">Acil Yuva</a>
            <a href="/support">Bağış Yap</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Kurumsal</h4>
            <a href="/about">Hakkımızda</a>
            <a href="/faq">S.S.S</a>
            <a href="/contact">İletişim</a>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        © 2026 YuvaOl Platformu. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
