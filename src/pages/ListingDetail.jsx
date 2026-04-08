import { useParams, Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { mockAnimals } from '../data/mockData';

export default function ListingDetail() {
  const { id } = useParams();
  const animal = mockAnimals.find(a => a.id === parseInt(id)) || mockAnimals[0];

  return (
    <div className="container animate-slide-up" style={{ padding: '2rem 1.5rem' }}>
      <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
        <div style={{ flex: '1 1 400px' }}>
          <img src={animal.image} alt={animal.name} style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: '1 1 400px', padding: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{animal.name}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {animal.breed} • {animal.age} • {animal.gender}
          </p>
          
          <h3 style={{ marginBottom: '1rem' }}>Benim Hikayem</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
            "{animal.description}"
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Sağlık Durumu</h3>
          <ul style={{ marginBottom: '3rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            {animal.health.map((h, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{h}</li>)}
          </ul>

          <div style={{ marginBottom: '2rem', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'var(--accent-primary-glass)', color: 'var(--accent-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
              {animal.ownerName?.charAt(0)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>İlan Sahibi</span>
              <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '600' }}>{animal.ownerName}</h4>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <Link to={`/apply/${animal.id}`} className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem', justifyContent: 'center', borderRadius: '12px', textAlign: 'center' }}>
              Sahiplenme Başvurusu Yap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
