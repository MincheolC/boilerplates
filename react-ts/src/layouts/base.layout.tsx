import * as React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavBar from '../components/GNB/GlobalNavBar';
import { MUIToolBarVariant } from '../components/types';
import Copyright from '../components/Copyright';
import { Box, Toolbar } from '@mui/material';
import ui from '../config/ui.json';

export const BaseLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <GlobalNavBar />
      <Box component="main" sx={{ flexGrow: 1, height: '100dvh', overflow: 'auto' }}>
        <Toolbar variant={ui.gnb.barSize as MUIToolBarVariant} />
        <Outlet />
        <Copyright />
      </Box>
    </Box>
  );
};
