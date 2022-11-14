import { Route, Routes } from 'react-router-dom';

import FavoritesCtxProvider from './context/favorites-ctx';

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import Random from './components/Pages/Random/Random';
import Details from './components/Pages/Details/Details';
import Favorites from './components/Pages/Favorites/Favorites';

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
          <Route path='/details/:beerId' element={<Details/>}/>
        </Routes>
      </Layout>
    </FavoritesCtxProvider>
  );
};

export default App;
