import { createTheme } from '@mui/material';

export const defaultTheme = createTheme();
export const classicTheme = createTheme({
  palette: {
    primary: {
      light: '#545978',
      main: '#4A4E69',
      dark: '#393C52',
    },
    secondary: {
      light: '#CCAFB0',
      main: '#BFA5A6',
      dark: '#8C7979',
    },
  },
});
