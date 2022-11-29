import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { BASE_URL, queries } from '../../../api/api';

import SearchBar from '../../UI/SearchBar';
import BeersList from '../../UI/BeerList';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('beer_name').trim();

  const { data: beers, loading, error, sendRequest } = useFetch();

  useEffect(()=> {
    sendRequest(BASE_URL + queries.searchByName + query);
  }, [query, sendRequest])

  return (
    <>
      <SearchBar defaultQuery={query} />
      {loading && <LoadingSpinner/>}
      {error && <h2>{error}</h2>}
      {!loading && !error && <BeersList beers={beers} />}
    </>
  );
};

export default Search;
