import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Avatar, Text, Title } from '@/shared/ui';
import Link from 'next/link';
import { useTranslate } from '@/shared/hooks';

export const Home: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <Avatar />

      <Text align="center" fontWeight={500} fontSize={40}>
        {t('name')}
      </Text>
      <Title align="center">{t('fe_dev')}</Title>

      <Box sx={{ a: { textDecoration: 'none' } }}>
        <Link href="/contacts">
          <Text align="center" fontWeight={500} fontSize={20} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
            {t('contact_me')}
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
