import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';

import LoadingSpinner from '../../UI/LoadingSpinner';
import BeersList from '../../UI/BeerList';
import Button from '../../UI/Button';

const Random = () => {
  const navigate = useNavigate();
  const { data: beers, loading, error, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(`https://api.punkapi.com/v2/beers/random`);
  }, [sendRequest]);

  return (
    <>
      <Button callback={() => navigate(-1)} classes='middle'>
        Go Back
      </Button>
      {loading && <LoadingSpinner />}
      {error && <h2>{error}</h2>}
      {!loading && !error && <BeersList beers={beers} />}
    </>
  );
};

export default Random;
