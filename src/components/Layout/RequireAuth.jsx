import { Navigate, Outlet } from 'react-router-dom';
import useWalletCtx from '../../hooks/useWalletCtx';

const RequireAuth = () => {
  const { isConnected } = useWalletCtx();
  console.log(isConnected);

  return isConnected ? <Outlet /> : <Navigate to='/' replace />;
};

export default RequireAuth;
