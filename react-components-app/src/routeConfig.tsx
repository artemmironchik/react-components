import { RouteObject } from 'react-router-dom';
import NotFound from './pages/404/404';
import About from './pages/about/About';
import MainPage from './pages/main/MainPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
