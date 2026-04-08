import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Hoş Geldiniz</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Hesabınıza giriş yapın.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>E-posta</label>
            <input type="email" className="input-field" placeholder="isim@ornek.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Şifre</label>
            <input type="password" className="input-field" placeholder="••••••••" />
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => { localStorage.setItem('isAuthenticated', 'true'); window.location.href='/profile'; }}>
            Giriş Yap
          </button>
        </form>
        
        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Hesabınız yok mu? <Link to="/register" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Kayıt Ol</Link>
        </div>
      </div>
    </div>
  );
}
