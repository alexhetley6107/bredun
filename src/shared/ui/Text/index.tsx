import React, { FC } from 'react';
import { Typography, TypographyProps, useMediaQuery } from '@mui/material';

export const Text: FC<TypographyProps> = ({ sx, children, ...props }) => {
  const isMobile = useMediaQuery('(max-width:450px)');

  return (
    <Typography
      fontSize={isMobile ? 16 : 20}
      lineHeight={isMobile ? '20px' : '26px'}
      fontWeight={500}
      sx={{ color: 'secondary.dark', my: '14px', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
