import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import routes from './routeConfig';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import store from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#f3f3f3" highlightColor="#ecebeb">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </Provider>
  );
}
