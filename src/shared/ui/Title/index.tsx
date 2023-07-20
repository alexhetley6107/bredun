import React, { FC } from 'react';
import { Typography, TypographyProps, useMediaQuery } from '@mui/material';

export const Title: FC<TypographyProps> = ({ sx, children, ...props }) => {
  const isLaptop = useMediaQuery('(max-width:1280px)');

  return (
    <Typography
      fontWeight={500}
      fontSize={isLaptop ? 30 : 50}
      lineHeight={isLaptop ? '35px' : '50px'}
      sx={{ color: 'primary.main', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
