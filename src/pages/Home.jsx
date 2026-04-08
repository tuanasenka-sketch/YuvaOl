import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import { mockAnimals } from '../data/mockData';

export default function Home() {
  const featuredAnimals = mockAnimals.slice(0, 3);

  return (
    <div className="animate-fade-in">
      <section style={{ 
        padding: '6rem 1.5rem', 
        textAlign: 'center',
        background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Sevgi Dolu Bir Yuva <br/>
            <span style={{ color: 'var(--accent-primary)' }}>Onların da Hakkı</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Binlerce patili dostumuz sıcak bir yuva bekliyor. Onların hayatına dokunun ve yaşamlarına umut olun.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/adopt" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Hemen Yuva Ol
            </Link>
            <Link to="/support" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Destek Ol
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Öne Çıkan Canlar</h2>
          <Link to="/adopt">Tümünü Gör &rarr;</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {featuredAnimals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
    </div>
  );
}
