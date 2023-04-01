import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './router';
import { ThemeProvider } from '@mui/material/styles';
import { classicTheme } from './theme';

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={classicTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
