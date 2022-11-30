import hero from '../../../assets/hero.jpg';

import styles from './Home.module.css';
import Button from '../../UI/Button';
import useWalletCtx from '../../../hooks/useWalletCtx';

const Home = () => {
  const { toggleWallet } = useWalletCtx();

  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Welcome Beer Lover</h1>
      <div className={styles.require_connect}>
        <h2>Please connect your wallet to see the catalog with offers</h2>
        <Button callback={toggleWallet} classes={'contained'}>Connect Now!</Button>
      </div>
      <img src={hero} className={styles.hero} alt='beers' />
      <p className={styles.disclaimer}>
        Order wisely and with a measure. Cheers!
      </p>
    </div>
  );
};

export default Home;
