import { Link } from 'react-router-dom';
import { Heart, MapPin, Syringe } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

export default function AnimalCard({ animal }) {
  const isUrgent = animal.isUrgent;
  const { isFavorited, toggleFavorite } = useFavorites();
  
  const favorited = isFavorited(animal.id);
  
  return (
    <div className="glass-panel animate-slide-up" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {isUrgent && (
        <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--danger)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          ACİL
        </span>
      )}
      <button 
        onClick={() => toggleFavorite(animal.id)}
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--glass-bg)', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Heart size={18} color={favorited ? "var(--danger)" : "var(--text-secondary)"} fill={favorited ? "var(--danger)" : "transparent"} />
      </button>
      
      <div style={{ width: '100%', height: '220px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
        <img 
          src={animal.image} 
          alt={animal.name} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain',
            padding: '1rem' 
          }} 
        />
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ margin: 0 }}>{animal.name}</h3>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '600' }}>{animal.gender}</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          {animal.breed} • {animal.age}
        </p>
        
        {animal.treatmentCost && (
          <div style={{ marginBottom: '1rem', padding: '0.8rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Toplanan: {animal.raised}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Hedef: {animal.treatmentCost}</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '40%', height: '100%', background: 'var(--danger)' }}></div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {animal.treatmentCost ? (
            <Link to={`/donate/${animal.id}`} className="btn btn-primary" style={{ flex: 1, width: '100%', padding: '0.6rem' }}>Destek Ol</Link>
          ) : (
            <Link to={`/listing/${animal.id}`} className="btn btn-outline" style={{ flex: 1, width: '100%', padding: '0.6rem' }}>İlan Detayı</Link>
          )}
        </div>
      </div>
    </div>
  );
}
