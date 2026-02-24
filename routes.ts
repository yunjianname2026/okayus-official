import { createBrowserRouter } from 'react-router';
import BrandHome from './pages/BrandHome';
import PlansPage from './pages/PlansPage';
import Checkout from './pages/Checkout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BrandHome />,
  },
  {
    path: '/plans',
    element: <PlansPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);
