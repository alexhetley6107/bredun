import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Title: FC<TypographyProps> = ({ sx, children, ...props }) => {
  return (
    <Typography
      fontWeight={500}
      fontSize={{ xs: '30px', xl: '40px' }}
      lineHeight={{ xs: '35px', xl: '45px' }}
      sx={{ color: 'secondary.dark', transition: 'all 0.3s', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
