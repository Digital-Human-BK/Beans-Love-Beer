import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Favorites from './components/Pages/Favorites/Favorites';
import Home from './components/Pages/Home/Home';
import Random from './components/Pages/Random/Random';
import Search from './components/Pages/Search/Search';
import FavoritesCtxProvider from './context/favorites-ctx';

const App = () => {
  return (
    <FavoritesCtxProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:pageId' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Layout>
    </FavoritesCtxProvider>
  );
};

export default App;
