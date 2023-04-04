import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import routes from './routeConfig';
import { SkeletonTheme } from 'react-loading-skeleton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

export default function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <RouterProvider router={router} />
    </SkeletonTheme>
  );
}
