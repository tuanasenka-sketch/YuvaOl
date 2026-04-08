import { useParams, Link } from 'react-router-dom';

export default function DonateForm() {
  const { id } = useParams();

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', minHeight: '60vh', padding: '2rem 1.5rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--danger)' }}>Güvenli Bağış</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Tedavi masraflarına destek olun.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Destek Tutarı (₺)</label>
            <input type="number" className="input-field" placeholder="Örn: 100" />
          </div>
          
          <hr style={{ borderColor: 'var(--glass-border)', margin: '0.5rem 0' }} />
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Kart Üzerindeki İsim</label>
            <input type="text" className="input-field" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Kart Numarası</label>
            <input type="text" className="input-field" placeholder="0000 0000 0000 0000" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>SKT</label>
              <input type="text" className="input-field" placeholder="AA/YY" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>CVV</label>
              <input type="text" className="input-field" placeholder="123" />
            </div>
          </div>

          <Link to="/success" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center', background: 'var(--danger)', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.5)' }}>
            Ödemeyi Tamamla
          </Link>
        </form>
      </div>
    </div>
  );
}
