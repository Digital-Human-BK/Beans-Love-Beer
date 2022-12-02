import { useNavigate } from 'react-router-dom';

import useFavoritesCtx from '../../hooks/useFavoritesCtx';

import audio from '../../assets/beer.mp3';
import styles from './BeerCard.module.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';

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
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <CardHeader
          action={
            <IconButton>
              {isFav ? (
                <StarIcon sx={{ color: '#00d1b2' }} />
              ) : (
                <StarBorderIcon sx={{ color: '#00d1b2' }} />
              )}
            </IconButton>
          }
        />
        <CardContent sx={{display: 'flex'}}>
          <div className={styles['content__img-area']}>
            <CardMedia
              component='img'
              onClick={showDetailsHandler}
              image={beer.image_url}
              alt='beer bottle'
            />
          </div>
          <div className={styles.content__info}>
            <h3 className={styles.info__name}>{beer.name}</h3>
            <p className={styles.info__desc}>{beer.description}</p>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );

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
