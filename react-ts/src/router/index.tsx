import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { BaseLayout } from '../layouts';
import { DashboardPage, ErrorPage, UsersPage } from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, path: 'dashboard', element: <DashboardPage /> },
          { path: 'users', element: <UsersPage /> },
        ],
      },
    ],
  },
];

export default routes;
