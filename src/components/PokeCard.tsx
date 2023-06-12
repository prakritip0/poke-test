import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface PokeCardPropsType{
    id:number
}

const PokeCard = ({id}:PokeCardPropsType) => {
    const {data, isPending}=useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    console.log(data.name);
    
  return (
    <div className='h-[13rem] w-[25rem] bg-red-300 border rounded-lg'>
      {/* <h2>{data?.name}</h2> */}
    </div>
  );
};

export default PokeCard;
