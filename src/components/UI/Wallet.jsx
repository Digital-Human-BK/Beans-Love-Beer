import useWalletCtx from '../../hooks/useWalletCtx';

import styles from './Wallet.module.css';
import Button from './Button';

const Wallet = ({ toggleWallet }) => {
  const {
    account,
    error,
    loading,
    isConnected,
    connectWallet,
    disconnectWallet,
  } = useWalletCtx();

  return (
    <>
      <div onClick={toggleWallet} className={styles.backdrop} />
      <aside className={styles.wallet}>
        <button onClick={toggleWallet} className={styles['close-btn']}>
          <i className='fa-solid fa-x'></i>
        </button>
        <div className={styles['wallet-controls']}>
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
