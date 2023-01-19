import Cart from '../../pages/Cart';
import Main from '../../pages/Main';
import NotFound from '../../pages/NotFound';
import Order from '../../pages/Order';
import { IRoutes } from '../types/routes/routes.types';

const config: IRoutes = {
  main: {
    path: '/',
    element: Main,
  },
  cart: {
    path: '/cart',
    element: Cart,
  },
  order: {
    path: '/order',
    element: Order,
  },
  notFound: {
    path: '*',
    element: NotFound,
  },
};
export default config;
