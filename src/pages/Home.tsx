import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { resourceLimits } from 'worker_threads';
import PokeCard from '../components/PokeCard';
import {useFetch} from '../hooks/useFetch';

interface PokemonsDataType {
  results: {
    name: string;
  }[];
}

const Home = () => {
  const fetch20URLs = [
    'https://pokeapi.co/api/v2/pokemon',
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
  ];
  const [page, setPage] = useState(0);
  // const [fetchURl, setFetchURL] = useState(fetch20URLs[page]);
  const {data, isPending} = useFetch<PokemonsDataType>(fetch20URLs[page]);
  console.log(data);
  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className='flex flex-col mx-[10%] mt-8'>
      <div className='grid grid-cols-4 gap-5 w-full'>
        {data?.results &&
          data.results.map((result) => {
            return (
              <PokeCard
               key={result.name} name={result.name[0].toUpperCase() + result.name.slice(1)} routeName={result.name}
              />
            );
          })}
      </div>
      <div className='flex justify-center gap-6 mt-10'>
        <button
          disabled={!page ? true : false}
          className={`px-2 py-1 ${
            !page ? 'bg-slate-100 ' : 'bg-slate-200'
          } rounded-full`}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
          className='px-2 py-1 bg-slate-200 rounded-full'
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
