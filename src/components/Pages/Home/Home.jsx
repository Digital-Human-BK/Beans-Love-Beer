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
  const page = Number(pageId) || 1;

  const { data: beers, loading, error, sendRequest } = useFetch();
  const nextBtnDisabled = !beers[11];

  useEffect(() => {
    sendRequest(BASE_URL + queries.pageNumQuery + page + queries.perPage);
  }, [sendRequest, page]);

  const pageChangeHandler = (value) => {
    if (page + value <= 0) {
      navigate('/1');
    } else {
      navigate(`/${page + value}`);
    }
  };

  return (
    <>
      <SearchBar />
      <p className={styles.or}>or</p>
      <Button callback={() => navigate('/random')} classes={'middle'}>
        Get a Random Beer
      </Button>

      {loading && <LoadingSpinner />}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {!loading && !error && <BeersList beers={beers} />}
      {!loading && !error && (
        <PageControls
          onPageChange={pageChangeHandler}
          page={page}
          nextBtnDisabled={nextBtnDisabled}
        />
      )}
    </>
  );
};

export default Home;
