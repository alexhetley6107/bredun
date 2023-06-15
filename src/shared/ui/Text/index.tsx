import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Text: FC<TypographyProps> = ({ sx, children, ...props }) => {
  return (
    <Typography {...props} sx={{ color: 'secondary.dark', ...sx }}>
      {children}
    </Typography>
  );
};
