import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: inherit;
`;

export const mainListItems = (
  <>
    <NavLink to="dashboard">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="대시보드" />
      </ListItemButton>
    </NavLink>
  </>
);

export const secondaryListItems = (
  <>
    <NavLink to="users">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="사용자 관리" />
      </ListItemButton>
    </NavLink>
  </>
);
