import styles from './BeersList.module.css';
import beersImg from '../../assets/beers.png';
import BeerCard from './BeerCard';
import Grid from '@mui/material/Grid';

const BeersList = ({ beers }) => {
  return (
    <section className={styles.beers}>
      <Grid container>
        {beers.length > 0 &&
          beers.map((beer) => <BeerCard key={beer.id} beer={beer} />)}
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

export default BeersList;
