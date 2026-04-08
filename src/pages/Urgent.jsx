import { mockAnimals } from '../data/mockData';
import AnimalCard from '../components/AnimalCard';

export default function Urgent() {
  const urgentList = mockAnimals.filter(a => a.isUrgent);

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--danger)' }}>Acil Yuva Arayanlar</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Kritik durumdaki, barınak veya sokak şartlarına dayanamayan canlar.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
        {urgentList.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
