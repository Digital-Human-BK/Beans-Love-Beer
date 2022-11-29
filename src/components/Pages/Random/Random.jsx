import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { BASE_URL, endpoints } from '../../../api/api';

import LoadingSpinner from '../../UI/LoadingSpinner';
import BeersList from '../../UI/BeerList';
import Button from '../../UI/Button';

const Random = () => {
  const navigate = useNavigate();
  const { data: beers, loading, error, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(BASE_URL + endpoints.random);
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
