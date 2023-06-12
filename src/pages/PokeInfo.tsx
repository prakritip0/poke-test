import React from 'react';
import {useParams} from 'react-router';
import PokemonDetails from '../components/PokemonDetails';
import {useFetch} from '../hooks/useFetch';

interface PokeInfoType {
  id: number;
  name: string;
  height: string;
  weight: string;
  base_experience: string;
}

const PokeInfo = () => {
  const {name} = useParams();
  console.log(name);

  const {data} = useFetch<PokeInfoType>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  console.log(data, name);

  return (
    <div className='mx-[10%] mt-[3rem]'>
      <div className='w-[7rem] h-[7rem] bg-red-100 border rounded-full'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
          alt=''
        />
      </div>
      <PokemonDetails
        name={!!data && data.name[0]?.toUpperCase() + data?.name.slice(1)}
        height={data?.height}
        weight={data?.weight}
        base_experience={data?.base_experience}
      />
    </div>
  );
};

export default PokeInfo;
