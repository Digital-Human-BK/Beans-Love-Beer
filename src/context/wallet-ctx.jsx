import { ethers } from 'ethers';
import { createContext, useState } from 'react';

export const WalletCtx = createContext({
  account: null,
  error: null,
  loading: false,
  showWallet: false,
  isConnected: false,
  toggleWallet: () => {},
  connectWallet: () => {},
  disconnectWallet: () => {},
});

const WalletCtxProvider = ({ children }) => {
  const [account, setAccount] = useState(
    JSON.parse(sessionStorage.getItem('mmWallet'))
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [isConnected, setIsConnected] = useState(
    !!JSON.parse(sessionStorage.getItem('mmWallet'))
  );

  const toggleWallet = () => {
    setShowWallet((prev) => !prev);
  };

  const connectWallet = async () => {
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

      sessionStorage.setItem(
        'mmWallet',
        JSON.stringify({ address: accounts[0], balance: convertedToEth })
      );

      setAccount({ address: accounts[0], balance: convertedToEth });
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    setLoading(true);
    sessionStorage.removeItem('mmWallet');
    setAccount(null);

    try {
      await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsConnected(false);
    }
  };

  return (
    <WalletCtx.Provider
      value={{
        account,
        error,
        loading,
        showWallet,
        isConnected,
        toggleWallet,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletCtx.Provider>
  );
};

export default WalletCtxProvider;
