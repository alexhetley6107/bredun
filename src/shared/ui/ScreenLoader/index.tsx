import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

export const ScreenLoader = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'fixed',
        zIndex: 1300,
        inset: 0,
        bgcolor: 'secondary.light',
      }}
    >
      <CircularProgress size={60} />
    </Stack>
  );
};
