import { Route, Routes } from 'react-router-dom';

import FavoritesCtxProvider from './context/favorites-ctx';

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import Random from './components/Pages/Random/Random';
import Catalog from './components/Pages/Catalog/Catalog';
import Details from './components/Pages/Details/Details';
import Favorites from './components/Pages/Favorites/Favorites';
import NotFound from './components/Pages/NotFound/NotFound';
import WalletCtxProvider from './context/wallet-ctx';

const App = () => {
  return (
    <WalletCtxProvider>
      <FavoritesCtxProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:pageId' element={<Catalog />} />
            <Route path='/random' element={<Random />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/search' element={<Search />} />
            <Route path='/details/:beerId' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </FavoritesCtxProvider>
    </WalletCtxProvider>
  );
};

export default App;
