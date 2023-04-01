import { Box, Link, Typography } from '@mui/material';
import * as React from 'react';

const Copyright: React.FC = () => {
  return (
    <Box sx={{ mt: '5vh' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Copyright;
