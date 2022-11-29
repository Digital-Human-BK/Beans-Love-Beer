import beermug from '../../../assets/beermug.png'
import useFavoritesCtx from '../../../hooks/useFavoritesCtx';

import styles from './Favorites.module.css';
import BeersList from '../../UI/BeerList';

const Favorites = () => {
  const { favorites } = useFavoritesCtx();

  const emptyFavContent = (
    <div className={styles['no-favorites']}>
      <h2 className={styles.message}>You haven't had any beer yet.</h2>
      <img src={beermug} alt="beer mug" />
      <p className={styles.cheers}>Go have one. Cheers!</p>
    </div>
  )

  return (
    <>
      {favorites.length === 0 ? emptyFavContent : <BeersList beers={favorites} />} 
    </>
  );
};

export default Favorites;
