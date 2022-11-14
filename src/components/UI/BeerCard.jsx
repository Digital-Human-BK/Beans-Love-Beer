import styles from './BeerCard.module.css';
import audio from '../../assets/beer.mp3';
import useFavoritesCtx from '../../hooks/useFavoritesCtx';

let openBeerSound = new Audio(audio);

const BeerCard = ({ beer }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavoritesCtx();
  const isFav = favorites.find(b => b.id === beer.id);

  const playSoundHandler = () => {
    openBeerSound.play();
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
        <i
          className={
            isFav ? 'fa-solid fa-star' : 'fa-regular fa-star'
          }
        />
      </button>
      <div className={styles.content}>
        <div className={styles['content__img-area']}>
          <img
            onClick={playSoundHandler}
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
