import React from 'react';

interface PokeCardProps {
  name: string;
}

const PokeCard = ({name}: PokeCardProps) => {
  return (
    <div className='bg-slate-100 px-3 py-4 rounded'>
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;
