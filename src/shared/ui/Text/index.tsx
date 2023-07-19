import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Text: FC<TypographyProps> = ({ sx, children, ...props }) => {
  return (
    <Typography
      fontSize={20}
      lineHeight={'26px'}
      fontWeight={500}
      sx={{ color: 'secondary.dark', mt: '14px', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
