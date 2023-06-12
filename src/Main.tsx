import React from 'react';
import { Outlet } from 'react-router';


const Main = () => {
    
  return (
    <div>
      <h1 className='text-center font-bold text-2xl text-red-300 w-[80%] mt-[1rem]'>
        Poke Tester
      </h1>
      <Outlet />
    </div>
  );
};

export default Main;
