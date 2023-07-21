import React, { FC } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Avatar, Text, Title } from '@/shared/ui';
import Link from 'next/link';
import { useTranslate } from '@/shared/hooks';

export const Home: FC = () => {
  const { t } = useTranslate();
  const isLaptop = useMediaQuery('(max-width:1280px)');

  return (
    <Box>
      <Avatar />

      <Text align="center" fontWeight={500} fontSize={isLaptop ? 26 : 40} lineHeight={isLaptop ? '30px' : '50px'}>
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

      <Text align="center">{t('skills')}:</Text>

      <Text>TypeScript / JavaScript (ES6+)</Text>
      <Text>ReactJS / React Native / Next.JS / Feature-Sliced Design</Text>
      <Text>Redux / Redux Thunk / Zustand / MobX</Text>
      <Text>Material UI / Ant Design / TailwindCSS / SCSS / CSS Modules</Text>
      <Text>VSCode / Git / Github, Leaflet</Text>

      <Text align="center">{t('experience')}:</Text>

      <Text align="center" sx={{ mb: 0 }}>
        Siema – Software Development Outsourcing & Outstaffing Services
      </Text>
      <Text align="center" sx={{ m: 0, color: 'primary.main' }}>
        {t('siema_dates')}
      </Text>
      <Text align="justify">{t('siema_work')}</Text>

      <Text align="center" sx={{ mb: 0 }}>
        Evryka - Digital Innovative Technologies
      </Text>
      <Text align="center" sx={{ m: 0, color: 'primary.main' }}>
        {t('evryka_dates')}
      </Text>
      <Text align="justify">{t('evryka_work')}</Text>

      <Text align="justify">{t('afterwords')}</Text>
    </Box>
  );
};
