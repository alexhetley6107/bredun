import React, { FC } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Avatar, Text, Title } from '@/shared/ui';
import Link from 'next/link';
import { useTranslate } from '@/shared/hooks';

export const Home: FC = () => {
  const { t } = useTranslate();
  const isMobile = useMediaQuery('(max-width:450px)');

  return (
    <Box>
      <Avatar />

      <Text align="center" fontWeight={500} fontSize={isMobile ? 26 : 40} lineHeight={isMobile ? '30px' : '50px'}>
        {t('name')}
      </Text>
      <Title align="center" mt="10px">
        {t('fe_dev')}
      </Title>

      <Text align="center">{t('greeting')}</Text>
      <Text align="justify">{t('about_me')}</Text>

      <Box sx={{ a: { textDecoration: 'none' } }}>
        <Link href="/contacts">
          <Text align="center" fontWeight={500} fontSize={20} lineHeight={'30px'} sx={{ color: 'primary.main' }}>
            {t('contact_me')}
          </Text>
        </Link>
      </Box>

      <Text>{t('skills')}</Text>
      <Text>{t('experience')}</Text>
      <Text>{t('afterwords')}</Text>

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
