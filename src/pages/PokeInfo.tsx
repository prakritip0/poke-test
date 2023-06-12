import React from 'react';
import {useFetch} from '../hooks/useFetch';

const PokeInfo = () => {
  const {data} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/1/`
  );

  return (
    <div className='mx-[10%] mt-[3rem]'>
      <div className='bg-red-100 w-[7rem] h-[7rem] rounded-full overflow-hidden'>
        <img
          className='w-[100%] h-[100%]'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png
`}
          alt=''
        />
      </div>
      <div className='flex flex-col gap-8 mt-10'>
        <h2>Name: {data.name[0]?.toUpperCase() + data?.name?.slice(1)}</h2>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        {/* <p>Abilites:{data.abilities.map((ability)=>ability)} </p> */}
        {/* <p>
          {data.abilities.map((ability) => {
           return ability;
          })}
        </p> */}
        {/* <p>{data.abilities.ability.name}</p> */}
        <p>Base Experience: {data.base_experience}</p>
      </div>
    </div>
  );
};

export default PokeInfo;
