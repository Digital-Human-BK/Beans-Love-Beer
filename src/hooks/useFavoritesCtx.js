import { useContext } from 'react';
import { FavoritesCtx } from '../context/favorites-ctx';

const useFavoritesCtx = () => {
  return useContext(FavoritesCtx);
};

export default useFavoritesCtx;
