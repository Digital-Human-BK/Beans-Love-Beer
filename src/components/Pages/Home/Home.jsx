import { useNavigate } from 'react-router-dom';

import hero from '../../../assets/hero.jpg';
import heroPortrait from '../../../assets/herop.jpg';
import useWalletCtx from '../../../hooks/useWalletCtx';

import styles from './Home.module.css';
import Button from '../../UI/Button';

const Home = () => {
  const navigate = useNavigate();
  const { isConnected, toggleWallet } = useWalletCtx();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.welcome}>Welcome Beer Lover</h1>
        <div className={styles.require_connect}>
          {!isConnected && (
            <>
              <h2>Please connect your wallet to see the catalog with offers</h2>
              <Button callback={toggleWallet} classes={'contained'}>
                Connect Now!
              </Button>
            </>
          )}
          {isConnected && (
            <>
              <h2>Browse our awesome collection of beers</h2>
              <Button
                callback={() => navigate('/catalog')}
                classes={'contained'}
              >
                Visit Catalog
              </Button>
            </>
          )}
        </div>
      </div>
      <p className={styles.disclaimer}>
        Order wisely and with a measure. Cheers!
      </p>
    </>
  );
};

export default Home;
