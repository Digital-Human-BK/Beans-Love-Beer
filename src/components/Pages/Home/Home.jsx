import {  useNavigate } from 'react-router-dom';
import hero from '../../../assets/hero.jpg';



import styles from './Home.module.css';
import ErrorMsg from '../../UI/ErrorMsg';
import SearchBar from '../../UI/SearchBar';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Button from '../../UI/Button';

const Home = () => {
  const navigate = useNavigate();


  return (
    <>
      <h1 className={styles.welcome}>Welcome Beer Lover</h1>
      <img src={hero} className={styles.hero} alt="beers" />
      <p className={styles.disclaimer}>Please order wisely and with a measure. Cheers!</p>
    </>
  );
};

export default Home;
