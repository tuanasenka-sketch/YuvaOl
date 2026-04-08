import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export default function Profile() {
  const { favorites } = useFavorites();
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Sidebar Navigation */}
      <aside className="glass-panel" style={{ flex: '1 1 250px', padding: '2rem', height: 'fit-content' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', background: 'var(--accent-primary)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            T
          </div>
          <h3>Tuana</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Kayıtlı Üye</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/profile" className="btn" style={{ justifyContent: 'flex-start', background: 'rgba(255,255,255,0.1)' }}>Panoya Dön</Link>
          <Link to="/profile/settings" className="btn btn-outline" style={{ border: 'none', justifyContent: 'flex-start' }}>Bilgilerim</Link>
          <Link to="/profile/favorites" className="btn btn-outline" style={{ border: 'none', justifyContent: 'flex-start' }}>Favorilerim</Link>
          <Link to="/profile/applications" className="btn btn-outline" style={{ border: 'none', justifyContent: 'flex-start' }}>Başvurularım</Link>
          <Link to="/profile/donations" className="btn btn-outline" style={{ border: 'none', justifyContent: 'flex-start' }}>Bağış Geçmişim</Link>
          <hr style={{ borderColor: 'var(--glass-border)', margin: '1rem 0' }} />
          <button onClick={() => { localStorage.removeItem('isAuthenticated'); window.location.href='/'; }} className="btn btn-outline" style={{ border: 'none', justifyContent: 'flex-start', color: 'var(--danger)' }}>Çıkış Yap</button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: '3 1 600px' }}>
        <h2 style={{ marginBottom: '2rem' }}>Hoş Geldiniz, Tuana</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
          
          <Link to="/profile/favorites" className="glass-panel" style={{ padding: '2rem', textAlign: 'center', display: 'block', textDecoration: 'none', transition: 'transform var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <h1 style={{ color: 'var(--accent-primary)', fontSize: '3rem', margin: 0 }}>{favorites.length}</h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0, marginTop: '0.5rem' }}>Favoriye Eklenen</p>
          </Link>

          <Link to="/profile/applications" className="glass-panel" style={{ padding: '2rem', textAlign: 'center', display: 'block', textDecoration: 'none', transition: 'transform var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <h1 style={{ color: 'var(--success)', fontSize: '3rem', margin: 0 }}>1</h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0, marginTop: '0.5rem' }}>Aktif Başvuru</p>
          </Link>

          <Link to="/profile/donations" className="glass-panel" style={{ padding: '2rem', textAlign: 'center', display: 'block', textDecoration: 'none', transition: 'transform var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <h1 style={{ color: 'var(--warning)', fontSize: '3rem', margin: 0 }}>2</h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0, marginTop: '0.5rem' }}>Bağış</p>
          </Link>

        </div>
      </main>
    </div>
  );
}
