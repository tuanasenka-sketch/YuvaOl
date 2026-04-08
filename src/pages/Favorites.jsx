import { mockAnimals } from '../data/mockData';
import AnimalCard from '../components/AnimalCard';
import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites } = useFavorites();
  
  // Sadece ID'si favoriler listesindeki hayvanları filtrele
  const favoritedAnimals = mockAnimals.filter(animal => favorites.includes(animal.id));

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <main style={{ flex: '1' }}>
        <h2 style={{ marginBottom: '2rem' }}>Favorilerim</h2>
        
        {favoritedAnimals.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Şu an favoriye eklediğiniz bir pati bulunmuyor.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {favoritedAnimals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
