import React from 'react';
import {Link} from 'react-router-dom';
import PokeCard from '../components/PokeCard';
import {useFetch} from '../hooks/useFetch';

interface PokemonsDataType {
  results: {
    name: string;
  }[];
}

const Home = () => {
  const {data, isPending} = useFetch<PokemonsDataType>(
    'https://pokeapi.co/api/v2/pokemon'
  );
  console.log(data);
  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className='flex flex-col mx-[10%] mt-8'>
      <div className='grid grid-cols-3 gap-5 w-full'>
        {data?.results &&
          data.results.map((result) => {
            return (
              <Link key={result.name} to={`./details/${result.name}`}>
                <PokeCard name={(result.name[0]).toUpperCase()+ result.name.slice(1)} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
