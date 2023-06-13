import React from 'react'

interface PokemonDetailsType{
    name:string|false;
    height:string|undefined;
    weight:string|undefined;
    base_experience:string|undefined
}

const PokemonDetails = ({name, height, weight, base_experience}:PokemonDetailsType) => {
  return (
    <div className='flex flex-col gap-8 mt-4'>
        <p className='font-bold'>
          {name}
        </p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Base Experience : {base_experience}</p>
      </div>
  )
}

export default PokemonDetails