import { Box, Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100svh',
        overflowX: 'hidden',
        bgcolor: 'secondary.light',
        '&::-webkit-scrollbar-thumb': {
          borderWidth: { xs: '3px', md: `5px` },
          borderStyle: 'solid',
          borderColor: 'secondary.light',
          backgroundColor: 'secondary.dark',
          borderRadius: '30px',
        },
        '&::-webkit-scrollbar': {
          width: { xs: '8px', md: '16px' },
        },
      }}
    >
      <Container maxWidth="sm" disableGutters sx={{ px: '20px', mb: '10px' }}>
        {children}
      </Container>
    </Box>
  );
};
