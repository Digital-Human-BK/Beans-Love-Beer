const beersPerPage = 12;

export const BASE_URL = 'https://api.punkapi.com/v2/beers';

export const endpoints = {
  random: '/random',
}

export const queries = {
  searchByName: '?beer_name=',
  pageNumQuery: '?page=',
  perPage: `&per_page=${beersPerPage}`,
};