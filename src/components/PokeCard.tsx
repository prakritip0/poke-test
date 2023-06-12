import React from 'react';
import {useFetch} from '../hooks/useFetch';
import {Link} from 'react-router-dom'

interface PokeCardPropsType {
  id: number;
}

const PokeCard = ({id}: PokeCardPropsType) => {
  const {data} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );


  return (
    <Link to='/pokeInfo'>
    <div className='h-[5rem] w-[15rem] bg-red-300 border rounded-lg px-3 py-2 cursor-pointer' >
      {/* <div className='h-[6rem] w-[6rem] rounded-full overflow-hidden'>
        <img
          className='w-[100%] h-[100%]'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={data.name}
        />
      </div> */}
      <h2 className='text-white text-lg font-bold'>
        {data?.name[0]?.toUpperCase() + data?.name?.slice(1)}
      </h2>
      <p className='text-white'>Id: {id}</p>
    </div>
    </Link>
  );
};

export default PokeCard;
