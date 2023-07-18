import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

export const Avatar = () => {
  const isMobile = useMediaQuery('(max-width:450px)');

  return (
    <Box
      sx={{
        height: isMobile ? '180px' : '240px',
        width: isMobile ? '180px' : '240px',
        m: '30px auto',
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
