import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';

import styles from './Home.module.css';
import SearchBar from '../../UI/SearchBar';
import BeersList from '../../UI/BeerList';
import LoadingSpinner from '../../UI/LoadingSpinner';
import PageControls from '../../UI/PageControls';
import Button from '../../UI/Button';

const Home = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();
  const page = pageId || 1;

  const { data: beers, loading, error, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);
  }, [sendRequest, page]);

  const pageChangeHandler = (value) => {
    const pageNum = Number(page);
    if (pageNum + value <= 0) {
      navigate('/1');
    } else if (pageNum + value >= 37) {
      navigate('/37');
    } else {
      navigate(`/${pageNum + value}`);
    }
  };

  return (
    <>
      <SearchBar />
      <p className={styles.or}>or</p>
      <Button callback={() => navigate('/random')} classes={'middle'}>
        Get Random Beer
      </Button>
      {loading && <LoadingSpinner />}
      {error && <h2>{error}</h2>}
      {!loading && !error && <BeersList beers={beers} />}
      <PageControls onPageChange={pageChangeHandler} page={page} />
    </>
  );
};

export default Home;
