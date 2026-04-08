export default function Contact() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>İletişim</h1>
      
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Ad Soyad</label>
            <input type="text" className="input-field" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>E-posta</label>
            <input type="email" className="input-field" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Mesajınız</label>
            <textarea className="input-field" rows="5"></textarea>
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => alert('Mesajınız alındı!')}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
