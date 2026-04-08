export default function DonationHistory() {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <main style={{ flex: '1' }}>
        <h2 style={{ marginBottom: '2rem' }}>Bağış Geçmişim</h2>
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h3>Karabaş (Tedavi Desteği)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Tarih: 01.04.2026</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--success)' }}>+ 500 ₺</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>İşlem No: 98127398</span>
          </div>
        </div>
      </main>
    </div>
  );
}
