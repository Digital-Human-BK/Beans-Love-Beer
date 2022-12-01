import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (response.ok === false) {
        const apiError = await response.json();
        throw apiError;
        // throw new Error('Something went wrong');
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    sendRequest,
  };
};

export default useFetch;
