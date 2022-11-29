import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { BASE_URL, queries } from '../../../api/api';

import styles from './Home.module.css';
import ErrorMsg from '../../UI/ErrorMsg';
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
    sendRequest(BASE_URL+ queries.pageNum + page + queries.perPage);
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
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {!loading && !error && <BeersList beers={beers} />}
      {!loading && !error && <PageControls onPageChange={pageChangeHandler} page={page} />}
    </>
  );
};

export default Home;
