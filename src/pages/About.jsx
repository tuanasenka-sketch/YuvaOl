export default function About() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--accent-primary)', marginBottom: '2rem' }}>Hakkımızda</h1>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Biz Kimiz?</h3>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Yeni Yuva, Türkiye'deki sokak hayvanları ve barınaktaki dostlarımız için gönüllüler tarafından kurulmuş, hiçbir kar amacı gütmeyen dijital bir dayanışma platformudur. 
          Amacımız, yuva arayan her bir canın hikayesini daha geniş kitlelere ulaştırmak ve teknoloji sayesinde sahiplenme sürecini kolaylaştırmaktır.
        </p>

        <h3 style={{ marginBottom: '1rem' }}>Vizyonumuz</h3>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          "Satın alma, sahiplen" felsefesini toplumun her kesimine yayarak, sokaklarda ve barınaklarda zor durumda olan hayvanların sayısını sıfıra indirmek. Modern, şeffaf ve güvenilir bir ekosistem inşa etmek.
        </p>
      </div>
    </div>
  );
}
