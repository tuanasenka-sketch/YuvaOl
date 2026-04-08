import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('yeniYuvaFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('yeniYuvaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (animalId) => {
    setFavorites(prev => {
      if (prev.includes(animalId)) {
        return prev.filter(id => id !== animalId);
      } else {
        return [...prev, animalId];
      }
    });
  };

  const isFavorited = (animalId) => favorites.includes(animalId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
