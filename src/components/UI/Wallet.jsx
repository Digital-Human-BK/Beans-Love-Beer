import useWalletCtx from '../../hooks/useWalletCtx';
import wallet from '../../assets/wallet.png';

import styles from './Wallet.module.css';
import Button from './Button';

const Wallet = () => {
  const {
    account,
    error,
    loading,
    showWallet,
    isConnected,
    toggleWallet,
    connectWallet,
    disconnectWallet,
  } = useWalletCtx();

  return (
    <>
      {showWallet && <div onClick={toggleWallet} className={styles.backdrop} />}
      <aside className={`${styles.wallet} ${showWallet ? styles.active : ''}`}>
        <button onClick={toggleWallet} className={styles['close-btn']}>
          <i className='fa-solid fa-x'></i>
        </button>
        <div className={styles['wallet-controls']}>
          <img className={styles['wallet-img']} src={wallet} alt='wallet' />
          {(!isConnected || error) && (
            <Button callback={connectWallet}>Connect Wallet</Button>
          )}

          {!error && account.address !== null && account.balance !== null && (
            <>
              <Button callback={disconnectWallet}>Disconnect wallet</Button>
              <p className={styles.title}>Wallet address: </p>
              <p className={styles['account-address']}>{account.address}</p>
              <p className={styles.title}>Balance: </p>
              <p className={styles['account-address']}>{account.balance} ETH</p>
            </>
          )}
          {loading && <p className={styles.loading}>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </aside>
    </>
  );
};

export default Wallet;
