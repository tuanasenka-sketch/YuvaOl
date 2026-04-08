import { mockAnimals } from '../data/mockData';
import AnimalCard from '../components/AnimalCard';

export default function Adopt() {
  const adoptionList = mockAnimals.filter(a => !a.treatmentCost);

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--accent-primary)' }}>Yuva Arayanlar</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Sıcak bir aile bekleyen dostlarımızla tanışın.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {adoptionList.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
