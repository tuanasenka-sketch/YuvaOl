export default function Applications() {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <main style={{ flex: '1' }}>
        <h2 style={{ marginBottom: '2rem' }}>Başvurularım</h2>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>Mıstık (Tekir Kedi) İçin Başvuru</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Tarih: 12.04.2026</p>
          </div>
          <span style={{ padding: '0.5rem 1rem', background: 'var(--warning)', color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>
            İnceleniyor
          </span>
        </div>
      </main>
    </div>
  );
}
