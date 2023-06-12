import React from 'react';
import PokeCard from './components/PokeCard';


const Home = () => {
    
  return (
    <div className='flex flex-col mx-[10rem] w-full'>
      <h1 className='text-center font-bold text-2xl text-red-300 w-[80%] mt-[1rem]'>
        Poke Tester
      </h1>
      <div className='flex flex-wrap w-[80%] mt-[3rem] justify-between'>
        <PokeCard id={1} />
        <PokeCard id={2}/>
        <PokeCard id={3} />
      </div>
    </div>
  );
};

export default Home;
