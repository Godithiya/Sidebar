import React from 'react'
import { createBrowserRouter,  } from 'react-router-dom'
import NotFound from './components/NotFound';
import Devices from './pages/Devices';
import Layout from './components/Layout';
import Locations from './pages/Locations';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'devices',
        element: <Devices />,
      },
      {
        path: 'locations',
        element: <Locations />,
      },
      // Add other routes here
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {

  return (
    <div>
       
    </div>
  )
}

export {
  App,
  router
}
