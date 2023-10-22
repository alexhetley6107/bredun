import React from 'react';
import { Box } from '@mui/material';

export const Avatar = () => {
  return (
    <Box
      sx={{
        height: { xs: '180px', xl: '240px' },
        width: { xs: '180px', xl: '240px' },
        m: '0 auto',
        mt: '20px',
        borderRadius: '300px',
        bgcolor: 'primary.main',
        overflow: 'hidden',
        transition: 'all 0.3s',
      }}
    >
      <Box
        component="img"
        src="./avatar.jpg"
        sx={{
          width: '180%',
          ml: '-30%',
        }}
      />
    </Box>
  );
};
