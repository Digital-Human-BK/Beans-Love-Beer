import styles from './BeersList.module.css';
import beersImg from '../../assets/beers.png';
import BeerCard from './BeerCard';

const BeersList = ({ beers }) => {
  console.log('render');
  return (
    <section className={styles.beers}>
      <ul className={styles['beers-list']}>
        {beers.length > 0 &&
          beers.map((beer) => <BeerCard key={beer.id} beer={beer} />)}
      </ul>
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
