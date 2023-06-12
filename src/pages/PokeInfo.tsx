import React from 'react';
import {useParams} from 'react-router';
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
  const {data} = useFetch<PokeInfoType>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  console.log(data);

  return (
    <div className='mx-[10%] mt-[3rem]'>
      <div className='w-[7rem] h-[7rem] bg-red-100 border rounded-full'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
          alt=''
        />
      </div>
      <div className='flex flex-col gap-8 mt-4'>
        <p className='font-bold'>
          {data!.name[0]?.toUpperCase() + data?.name.slice(1)}
        </p>
        <p>Height: {data?.height}</p>
        <p>Weight: {data?.weight}</p>
        <p>Base Experience : {data?.base_experience}</p>
      </div>
    </div>
  );
};

export default PokeInfo;
