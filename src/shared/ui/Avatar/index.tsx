import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

export const Avatar = () => {
  const isLaptop = useMediaQuery('(max-width:1280px)');

  return (
    <Box
      sx={{
        height: isLaptop ? '180px' : '240px',
        width: isLaptop ? '180px' : '240px',
        m: '0 auto',
        mt: '20px',
        borderRadius: '300px',
        bgcolor: 'primary.main',
        overflow: 'hidden',
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
