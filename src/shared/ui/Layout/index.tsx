import { Box, Container, useMediaQuery } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isTablet = useMediaQuery('(max-width:650px)');

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        bgcolor: 'secondary.light',
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'secondary.dark',
          border: isTablet ? '3px solid white' : `5px solid white`,
          borderColor: `secondary.light`,
          borderRadius: '30px',
        },
        '&::-webkit-scrollbar': {
          width: isTablet ? '8px' : '16px',
        },
      }}
    >
      <Container maxWidth="sm" disableGutters sx={{ px: '20px', mb: '100px' }}>
        {children}
      </Container>
    </Box>
  );
};
