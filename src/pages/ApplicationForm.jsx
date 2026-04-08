import { useParams, Link } from 'react-router-dom';

export default function ApplicationForm() {
  const { id } = useParams();

  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', padding: '2rem 1.5rem' }}>
      <div className="glass-panel" style={{ padding: '3rem' }}>
        <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Sahiplenme Başvurusu</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Lütfen aşağıdaki formu eksiksiz doldurun. Yuva arayan dostumuzun yaşam koşullarına uygunluğunuz titizlikle incelenecektir.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Daha önce evcil hayvan baktınız mı?</label>
            <select className="input-field" style={{ background: 'var(--bg-secondary)' }}>
              <option>Evet</option>
              <option>Hayır</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Evde yaşayan başka hayvan var mı?</label>
            <select className="input-field" style={{ background: 'var(--bg-secondary)' }}>
              <option>Yok</option>
              <option>Kedi var</option>
              <option>Köpek var</option>
              <option>Diğer</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Evinizde balkon/bahçe var mı ve korunaklı mı?</label>
            <textarea className="input-field" rows="3" placeholder="Lütfen detaylandırın..."></textarea>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Evde tek başına kalacağı süre ne kadar?</label>
            <input type="text" className="input-field" placeholder="Örn: Çalışma saatleri boyunca (Ort. 8 saat)" />
          </div>

          <Link to="/success" className="btn btn-primary" style={{ padding: '1rem', justifyContent: 'center' }}>
            Başvuruyu Tamamla
          </Link>
        </form>
      </div>
    </div>
  );
}
