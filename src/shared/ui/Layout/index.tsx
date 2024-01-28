import { Box, Container } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  animatedScrollProgress?: boolean;
}

export const Layout: FC<Props> = ({ children, animatedScrollProgress }) => {
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
          mt: '100px',
          width: { xs: '8px', md: '16px' },
        },
        scrollTimelineName: animatedScrollProgress ? '--progressTimeline' : '',

        '@keyframes scrollAnimation': {
          from: {
            width: '0%',
          },
          to: {
            width: 'calc(100% - 4px)',
          },
        },
      }}
    >
      {animatedScrollProgress && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            bgcolor: 'secondary.dark',
            mx: '2px',
            height: { xs: '1px', sm: '2px' },
            mt: { xs: '2px', sm: '1px' },
            animationName: 'scrollAnimation',
            animationTimeline: '--progressTimeline',
          }}
        />
      )}
      <Container maxWidth="sm" disableGutters sx={{ px: '20px', mb: '10px' }}>
        {children}
      </Container>
    </Box>
  );
};
