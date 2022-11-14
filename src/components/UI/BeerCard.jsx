import { useNavigate } from 'react-router-dom';

import useFavoritesCtx from '../../hooks/useFavoritesCtx';

import audio from '../../assets/beer.mp3';
import styles from './BeerCard.module.css';

let openBeerSound = new Audio(audio);

const BeerCard = ({ beer }) => {
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesCtx();
  const isFav = favorites.find((b) => b.id === beer.id);

  const showDetailsHandler = () => {
    openBeerSound.play();
    navigate('/details/' + beer.id);
  };

  const favoritesHandler = (item) => {
    if (isFav) {
      removeFromFavorites(item.id);
    }
    if (!isFav) {
      addToFavorites(item);
    }
  };

  return (
    <article className={styles.beer}>
      <button onClick={() => favoritesHandler(beer)} className={styles.fav}>
        <i className={isFav ? 'fa-solid fa-star' : 'fa-regular fa-star'} />
      </button>
      <div className={styles.content}>
        <div className={styles['content__img-area']}>
          <img
            onClick={showDetailsHandler}
            className={styles.content__img}
            src={beer.image_url}
            alt='beer bottle'
          />
        </div>
        <div className={styles.content__info}>
          <h3 className={styles.info__name}>{beer.name}</h3>
          <p className={styles.info__desc}>{beer.description}</p>
        </div>
      </div>
    </article>
  );
};

export default BeerCard;
