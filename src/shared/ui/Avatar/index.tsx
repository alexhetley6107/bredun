import { Avatar as MuiAvatar } from '@mui/material';
import React from 'react';

type Props = {};

export const Avatar = (props: Props) => {
  return (
    <MuiAvatar
      sx={{
        height: '240px',
        width: '240px',
        m: '30px auto',
        bgcolor: 'primary.main',
      }}
    >
      Avatar
    </MuiAvatar>
  );
};
