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
        bgcolor: 'primary.main',
        borderRadius: '10px',
        textTransform: 'uppercase',
        height: '100%',
        color: 'secondary.light',
        fontSize: '18px',
        whiteSpace: 'nowrap',
        px: '15px',
        '&:hover': {
          bgcolor: 'primary.main',
        },
        '&:disabled': {
          color: disabled ? 'info.light' : 'info.main',
        },
        ...sx,
      }}
    >
      {loading ? <CircularProgress size={20} sx={{ color: 'info.main' }} /> : children}
    </MuiButton>
  );
};
