import { createContext, useState } from 'react';

export const FavoritesCtx = createContext({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

const FavoritesCtxProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addFav = (item) => {
    setFav((prev) => [...prev, item]);
  };

  const removeFav = (id) => {
    const newFav = fav.filter((item) => item.id !== id);
    setFav(newFav);
  };

  return (
    <FavoritesCtx.Provider
      value={{
        favorites: fav,
        addToFavorites: addFav,
        removeFromFavorites: removeFav,
      }}
    >
      {children}
    </FavoritesCtx.Provider>
  );
};

export default FavoritesCtxProvider;
