import React, { FC } from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';

interface Props extends SnackbarProps {
  error?: boolean;
}

export const Snackbar: FC<Props> = ({ open, onClose, message, error }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
      message={message}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '10px',
          bgcolor: error ? 'error.main' : 'primary.main',
          color: 'white',
          fontWeight: 600,
        },
      }}
    />
  );
};
