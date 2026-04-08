import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '2rem 1.5rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Kayıt Ol</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Aramıza katılın ve bir cana umut olun.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Ad</label>
              <input type="text" className="input-field" placeholder="Adınız" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Soyad</label>
              <input type="text" className="input-field" placeholder="Soyadınız" />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>E-posta</label>
            <input type="email" className="input-field" placeholder="isim@ornek.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Şifre</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => { localStorage.setItem('isAuthenticated', 'true'); window.location.href='/profile'; }}>
            Kayıt Ol
          </button>
        </form>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Zaten hesabınız var mı? <Link to="/login" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
}
