import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Avatar, Text } from '@/shared/ui';
import Link from 'next/link';

export const Home: FC = () => {
  return (
    <Box>
      <Avatar />

      <Text align="center" fontWeight={500} fontSize={40}>
        Aleksandr Bredun
      </Text>
      <Text align="center" fontWeight={500} fontSize={50} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
        FrontEnd Developer
      </Text>

      <Box sx={{ a: { textDecoration: 'none' } }}>
        <Link href="/contacts">
          <Text align="center" fontWeight={500} fontSize={20} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
            Contact Me
          </Text>
        </Link>
      </Box>

      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
      <Typography sx={{ fontSize: '70px' }}>HOME </Typography>
    </Box>
  );
};
