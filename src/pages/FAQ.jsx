export default function FAQ() {
  const faqs = [
    { q: "Sahiplenme süreci nasıl işliyor?", a: "İlan detayından başvuru formunu doldurun. Ekibimiz veya ilanı veren kişi sizinle iletişime geçecektir." },
    { q: "Platform tamamen ücretsiz mi?", a: "Evet, ilan vermek ve sahiplenmek tamamen ücretsizdir." },
    { q: "Tedavi bağışları nereye ulaşıyor?", a: "Bağışlar doğrudan ilanı açan veteriner kliniklerinin hesaplarına doğrulanmış olarak aktarılmaktadır." },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Sıkça Sorulan Sorular</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem' }}>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{faq.q}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
