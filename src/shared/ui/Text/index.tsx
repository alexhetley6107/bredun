import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Text: FC<TypographyProps> = ({ sx, children, ...props }) => {
  return (
    <Typography
      fontSize={{ xs: '16px', xl: '20px' }}
      lineHeight={{ xs: '20px', xl: '26px' }}
      fontWeight={500}
      sx={{ color: 'secondary.dark', my: { xs: '10px', xl: '14px' }, transition: 'all 0.3s', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
