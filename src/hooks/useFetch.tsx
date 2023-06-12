import React, {useEffect, useState} from 'react';



export const useFetch = (url:string) => {
  const [data, setData] = useState({name:''});
  const [isPending, setIsPending]= useState(false)
;  useEffect(() => {
    const fetchData = async()=>{
        setIsPending(true);
        const response = await fetch(url);
        const json = await response.json();
        setIsPending(false);
        setData(json)
    };
    fetchData();
  }, [url]);
  return {data, isPending};
};

