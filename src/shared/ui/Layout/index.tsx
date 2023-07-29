import { Box, Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden',
        bgcolor: 'secondary.light',
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'secondary.dark',
          border: `5px solid white`,
          borderColor: `secondary.light`,
          borderRadius: '30px',
        },
        '&::-webkit-scrollbar': {
          width: '16px',
        },
      }}
    >
      <Container maxWidth="sm" disableGutters sx={{ px: '20px', mb: '100px' }}>
        {children}
      </Container>
    </Box>
  );
};
