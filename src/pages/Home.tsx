import React from 'react';
import PokeCard from '../components/PokeCard';

const Home = () => {
  return (
    <div className='flex flex-col mx-[10rem] w-full'>
      <div className='flex flex-wrap w-[80%] mt-[3rem] justify-between'>
        <PokeCard id={1} />
        <PokeCard id={2} />
        <PokeCard id={3} />
      </div>
    </div>
  );
};

export default Home;
