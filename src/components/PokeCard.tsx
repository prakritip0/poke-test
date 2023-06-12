import React from 'react';
import { Link } from 'react-router-dom';

interface PokeCardProps {
  name: string;
  routeName:string
}

const PokeCard = ({name, routeName}: PokeCardProps) => {
  console.log('Name', name, 'route', routeName);
  
  return (
    <Link data-testid='pokemon-card' to={`/details/${routeName}`}>
      <div className='bg-slate-100 px-3 py-5 rounded'>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default PokeCard;
