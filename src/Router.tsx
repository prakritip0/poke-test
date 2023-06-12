import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
// import PokeInfo from './pages/PokeInfo';
import Main from './Main';
import PokeInfo from './pages/PokeInfo';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/details/:name',
          element: <PokeInfo />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
