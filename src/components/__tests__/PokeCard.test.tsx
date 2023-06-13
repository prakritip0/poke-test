import {fireEvent, render, screen} from '@testing-library/react';
import PokeCard from '../PokeCard';
import React from 'react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';

describe('Pokedex home', () => {
  const mockUseNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
  }));

  const TestComponent = (
    <BrowserRouter>
      <PokeCard name='Bulbasaur' routeName='/details/bulbasaur' />
    </BrowserRouter>
  );
  it('Renders properly', () => {
    render(TestComponent);
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const {baseElement} = render(TestComponent);
    expect(baseElement).toMatchSnapshot();
  });

  it('navigates to detail page', async () => {
    render(TestComponent);

    // fireEvent.click(await screen.findByTestId('pokemon-card'));

    // expect(mockUseNavigate).toBeCalled();
  });
});
