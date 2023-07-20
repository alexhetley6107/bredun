import React, { FC } from 'react';
import { Typography, TypographyProps, useMediaQuery } from '@mui/material';

export const Text: FC<TypographyProps> = ({ sx, children, ...props }) => {
  const isLaptop = useMediaQuery('(max-width:1280px)');

  return (
    <Typography
      fontSize={isLaptop ? 16 : 20}
      lineHeight={isLaptop ? '20px' : '26px'}
      fontWeight={500}
      sx={{ color: 'secondary.dark', my: '14px', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
