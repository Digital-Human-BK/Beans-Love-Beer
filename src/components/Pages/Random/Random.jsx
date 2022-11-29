import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { BASE_URL, endpoints } from '../../../api/api';

import Button from '../../UI/Button';
import ErrorMsg from '../../UI/ErrorMsg';
import BeersList from '../../UI/BeerList';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Random = () => {
  const navigate = useNavigate();
  const { data: beers, loading, error, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(BASE_URL + endpoints.random + 'a');
  }, [sendRequest]);

  return (
    <>
      <Button callback={() => navigate(-1)} classes='middle'>
        Go Back
      </Button>
      {loading && <LoadingSpinner />}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {!loading && !error && <BeersList beers={beers} />}
    </>
  );
};

export default Random;
