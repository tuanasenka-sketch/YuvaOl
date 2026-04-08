import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Success() {
  return (
    <div className="container animate-slide-up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: 'var(--success)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 2rem', boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}>
          <Heart size={40} color="white" fill="white" />
        </div>
        
        <h2 style={{ marginBottom: '1rem' }}>İşlem Başarılı!</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Teşekkür ederiz. Gerekli işlemler tamamlandı, süreçle ilgili en kısa sürede bilgilendirileceksiniz.
        </p>
        
        <Link to="/" className="btn btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
