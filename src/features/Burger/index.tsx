import React, { FC } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const iconStyles = { width: '45px', height: '45px', color: 'secondary.light' };

interface Props {
  open: boolean;
  onToggle: () => void;
}

export const Burger: FC<Props> = ({ open, onToggle }) => {
  const isTablet = useMediaQuery('(max-width:650px)');

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1210,
        ...(isTablet ? { bottom: '50px', right: '20px' } : { top: '20px', left: '20px' }),
      }}
    >
      <IconButton
        onClick={onToggle}
        sx={{
          width: '60px',
          height: '60px',
          bgcolor: 'secondary.dark',
          '&:hover': {
            bgcolor: 'primary.main',
          },
        }}
      >
        {open ? <CloseIcon sx={iconStyles} /> : <MenuIcon sx={iconStyles} />}
      </IconButton>
    </Box>
  );
};
