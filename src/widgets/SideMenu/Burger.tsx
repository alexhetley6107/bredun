import React, { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  onToggle: () => void;
}

export const Burger: FC<Props> = ({ open, onToggle }) => {
  const iconStyles = { width: '45px', height: '45px', color: 'secondary.light' };
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1210,
      }}
    >
      <IconButton
        onClick={onToggle}
        sx={{
          width: '60px',
          height: '60px',
          bgcolor: 'secondary.dark',
          '&:hover': {
            bgcolor: 'secondary.dark',
          },
        }}
      >
        {open ? <CloseIcon sx={iconStyles} /> : <MenuIcon sx={iconStyles} />}
      </IconButton>
    </Box>
  );
};
