import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export const Title: FC<TypographyProps> = ({ sx, children, ...props }) => {
  return (
    <Typography fontWeight={500} fontSize={50} lineHeight={'50px'} sx={{ color: 'primary.main', ...sx }} {...props}>
      {children}
    </Typography>
  );
};
