import React, { FC } from 'react';
import { Box, TypographyProps } from '@mui/material';
import Link from 'next/link';
import { Text } from '../Text';

interface Props extends TypographyProps {
  route: string;
}

export const NavLink: FC<Props> = ({ route, align, children }) => {
  return (
    <Box sx={{ a: { textDecoration: 'none' } }}>
      <Link href={route}>
        <Text align={align ?? 'left'} fontWeight={500} fontSize={20} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
          {children}
        </Text>
      </Link>
    </Box>
  );
};
