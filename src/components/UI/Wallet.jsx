import { useState } from 'react';
import { ethers } from 'ethers';

import styles from './Wallet.module.css';
import Button from './Button';

const Wallet = ({ toggleWallet }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [account, setAccount] = useState({ address: null, balance: null });

  const address = account.address;
  const balance = account.balance;

  const connectWalletHandler = async () => {
    setError(null);
    setLoading(true);
    try {
      if (!window.ethereum) {
        throw new Error(
          'Metamask not detected! Please install the Metamask extension and create an account.'
        );
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const [accounts, signer] = await Promise.all([
        provider.send('eth_requestAccounts', []),
        provider.getSigner(),
      ]);

      const balance = await signer.getBalance();
      const convertedToEth = balance / 1e18;
      setIsConnected(true);
      setAccount({ address: accounts[0], balance: convertedToEth });
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWalletHandler = async () => {
    setLoading(true);
    setAccount({ address: null, balance: null });

    try {
      await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      setIsConnected(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div onClick={toggleWallet} className={styles.backdrop} />
      <aside className={styles.wallet}>
        <button onClick={toggleWallet} className={styles['close-btn']}>
          <i className='fa-solid fa-x'></i>
        </button>
        <div className={styles['wallet-controls']}>
          {!isConnected && (
            <Button callback={connectWalletHandler}>Connect Wallet</Button>
          )}

          {!error && address !== null && balance !== null && (
            <>
              <Button callback={disconnectWalletHandler}>
                Disconnect wallet
              </Button>
              <p className={styles.title}>Wallet address: </p>
              <p className={styles['account-address']}>{address}</p>
              <p className={styles.title}>Balance: </p>
              <p className={styles['account-address']}>{balance} ETH</p>
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
