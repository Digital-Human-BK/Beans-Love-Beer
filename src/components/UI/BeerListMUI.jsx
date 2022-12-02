import styles from './BeersList.module.css';
import beersImg from '../../assets/beers.png';
import BeerCardMUI from './BeerCardMUI';
import Grid from '@mui/material/Grid';

const BeersListMUI = ({ beers }) => {
  return (
    <section className={styles.beers}>
      <Grid container spacing={3}>
        {beers.length > 0 &&
          beers.map((beer) => <BeerCardMUI key={beer.id} beer={beer} />)}
      </Grid>
      {beers.length === 0 && (
        <div className={styles['no-results']}>
          <h2 className={styles.message}>
            Sorry we couldn't find any beer matching your taste...
          </h2>
          <img className={styles.image} src={beersImg} alt='case of beer' />
          <p className={styles.another}>Please try different name</p>
        </div>
      )}
    </section>
  );
};

export default BeersListMUI;
