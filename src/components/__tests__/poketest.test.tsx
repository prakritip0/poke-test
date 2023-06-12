import {findByText, render, screen} from '@testing-library/react';
import PokeCard from '../PokeCard';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pokedex home', () => {
  const TestComponent = <PokeCard name='Bulbasaur' routeName='/details/bulbasur' />;
  it('Renders properly', () => {
    render(TestComponent);
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const {baseElement} = render(TestComponent);
    expect(baseElement).toMatchSnapshot();
  });
});
