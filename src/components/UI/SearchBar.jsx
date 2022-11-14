import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

const SearchBar = ({defaultQuery}) => {
  const navigate = useNavigate()
  const searchInputRef = useRef();

  const searchHandler = async (ev) => {
    ev.preventDefault();
    const query = searchInputRef.current.value.trim();

    if(!query) {
      searchInputRef.current.value = '';
      return;
    }

    if(query === defaultQuery) {
      return;
    }

    const encodeQuery = encodeURIComponent(query);
    navigate(`/search?beer_name=${encodeQuery}`);
  };

  return (
    <form
      onSubmit={searchHandler}
      action='GET'
      className={styles['search-form']}
    >
      <input
        type='text'
        name='query'
        ref={searchInputRef}
        defaultValue={defaultQuery}
        className={styles['search-input']}
        placeholder='Search for beer'
      />
      <button className={styles.submit}>
        <i className='fa-solid fa-magnifying-glass' />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
