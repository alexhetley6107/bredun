import React, { FC } from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';

export const Snackbar: FC<SnackbarProps> = ({ open, onClose, message }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
      message={message}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '10px',
          bgcolor: 'error.main',
          color: 'white',
          fontWeight: 600,
        },
      }}
    />
  );
};
