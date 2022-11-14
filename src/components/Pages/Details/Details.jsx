import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import LoadingSpinner from '../../UI/LoadingSpinner';

import styles from './Details.module.css';

const Details = () => {
  const { beerId } = useParams();
  const { data, loading, error, sendRequest } = useFetch();
  const beer = data[0];

  useEffect(() => {
    sendRequest(`https://api.punkapi.com/v2/beers/${beerId}`);
  }, [sendRequest]);

  if(loading) {
    return <LoadingSpinner/>
  }

  return (
    <article className={styles['beer-details']}>
      <img className={styles.beer__img} src={beer.image_url} alt='beer' />
      <div className={styles.beer__content}>
        <h1 className={styles.name}>{beer.name}</h1>
        <h3 className={styles.tagline}>{beer.tagline}</h3>
        <p className={styles.desc}>{beer.description}</p>
        <div className={styles.additional_info}>
          <p>
            <strong>First brewed: {beer.first_brewed}</strong>
          </p>
          <p>
            Volume: {beer.volume.value} {beer.volume.unit}
          </p>
          <p>
            Yeast:{' '}
            <span className={styles.yeast}>{beer.ingredients.yeast}</span>
          </p>
          <ul className={styles.food_pairing}>
            Goes well with: <span></span>
            {beer.food_pairing.map((fp, i) => (
              <li className={styles.pair} key={i}>
                {fp}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Details;
