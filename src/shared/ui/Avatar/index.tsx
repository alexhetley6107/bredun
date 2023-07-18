import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

export const Avatar = () => {
  return (
    <MuiAvatar
      src="./avatar.jpg"
      sx={{
        height: '240px',
        width: '240px',
        m: '30px auto',
        bgcolor: 'primary.main',
        img: {},
      }}
    />
  );
};
