import { useContext } from 'react';
import { WalletCtx } from '../context/wallet-ctx';

const useWalletCtx = () => {
  return useContext(WalletCtx);
};

export default useWalletCtx;
