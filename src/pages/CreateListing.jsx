export default function CreateListing() {
  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', minHeight: '60vh', padding: '2rem 1.5rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '700px', padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Yeni İlan Ver</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Sokakta bulduğunuz veya geçici yuva olduğunuz hayvanlar için ilan oluşturun.</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>İlan Tipi</label>
              <select className="input-field" style={{ background: 'var(--bg-secondary)' }}>
                <option>Sahiplendirme</option>
                <option>Kayıp</option>
                <option>Bulunan</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Tür</label>
              <select className="input-field" style={{ background: 'var(--bg-secondary)' }}>
                <option>Kedi</option>
                <option>Köpek</option>
                <option>Kuş</option>
                <option>Diğer</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>İsim (Varsa)</label>
            <input type="text" className="input-field" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Açıklama / Hikaye</label>
            <textarea className="input-field" rows="4" placeholder="Durumunu detaylı olarak anlatın..."></textarea>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Fotoğraf Yükle (URL)</label>
            <input type="text" className="input-field" placeholder="https://..." />
          </div>

          <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => alert('İlan onaya gönderildi!')}>
            İlanı Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
