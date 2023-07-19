import React, { FC } from 'react';
import { Typography, TypographyProps, useMediaQuery } from '@mui/material';

export const Title: FC<TypographyProps> = ({ sx, children, ...props }) => {
  const isMobile = useMediaQuery('(max-width:450px)');

  return (
    <Typography
      fontWeight={500}
      fontSize={isMobile ? 30 : 50}
      lineHeight={isMobile ? '35px' : '50px'}
      sx={{ color: 'primary.main', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
