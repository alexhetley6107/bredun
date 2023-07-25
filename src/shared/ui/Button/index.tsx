import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps, CircularProgress } from '@mui/material';

interface Props extends ButtonProps {
  loading?: boolean;
}

export const Button: React.FC<Props> = ({ loading, disabled, children, onClick, type, sx }) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      fullWidth
      disabled={disabled}
      sx={{
        boxSizing: 'border-box',
        position: 'relative',
        bgcolor: 'secondary.dark',
        borderRadius: '10px',
        textTransform: 'uppercase',
        height: '45px',
        color: 'secondary.light',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        px: '15px',
        '&:hover': {
          bgcolor: 'secondary.dark',
        },
        '&:disabled': {
          color: disabled ? 'info.light' : 'info.main',
        },
        ...sx,
      }}
    >
      {loading ? <CircularProgress size={30} sx={{ color: 'secondary.light' }} /> : children}
    </MuiButton>
  );
};
