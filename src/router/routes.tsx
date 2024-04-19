import { CityDetail } from '../components/CityDetail/CityDetail';
import { Layout } from '../components/Layout/Layout';
import { CityListPage } from '../pages/CityListPage';
import { ErrorPage } from '../pages/ErrorPage';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CityListPage />,
      },
      {
        path: '/:id/:title',
        element: <CityDetail />,
      },
    ],
  },
];
