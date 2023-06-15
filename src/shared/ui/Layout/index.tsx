import { Box, Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Container sx={{ border: '1px solid red' }}>{children}</Container>
    </Box>
  );
};
