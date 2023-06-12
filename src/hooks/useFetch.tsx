import React, {useEffect, useState} from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState({name: ''});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null|string>();
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Couldn't fetch data!!`);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return {data, isPending, error};
};
