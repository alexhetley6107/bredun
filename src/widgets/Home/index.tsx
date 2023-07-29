import React, { FC } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Avatar, NavLink, Text, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';

export const Home: FC = () => {
  const { t } = useTranslate();
  const isLaptop = useMediaQuery('(max-width:1280px)');

  return (
    <Box>
      <Avatar />

      <Text
        align="center"
        fontWeight={500}
        fontSize={isLaptop ? 24 : 35}
        lineHeight={isLaptop ? '30px' : '45px'}
        sx={{ mb: 0, color: 'primary.main' }}
      >
        {t('hero_name')}
      </Text>
      <Title align="center">{t('fe_dev')}</Title>

      <Text align="center">{t('greeting')}</Text>
      <Text align="justify">{t('about_me')}</Text>

      <NavLink route="/contacts" align="center" sx={{ my: 0 }}>
        {t('contact_me')}
      </NavLink>

      <Text align="center">{t('skills')}:</Text>

      <Text> - TypeScript / JavaScript (ES6+)</Text>
      <Text> - NextJS / ReactJS / React Native / Angular</Text>
      <Text> - Redux Toolkit / Redux / Redux Thunk / Zustand</Text>
      <Text> - React Hook Form / Formik / Leaflet</Text>
      <Text> - SCSS / styled-components / CSS Modules </Text>
      <Text> - Material UI / Ant Design</Text>
      <Text> - React Testing Library / Jest </Text>
      <Text> - ESLint / Prettier</Text>
      <Text> - NestJS / Express</Text>
      <Text> - PostreSQL / MongoDB</Text>
      <Text> - JWT / PassportJS</Text>
      <Text> - GraphQL (Apollo) / RESTApi / Swagger</Text>
      <Text> - WebSocket / WebRTC / Socket.io</Text>

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

      <Text align="center">{t('and_also')}</Text>

      <Text align="justify">{t('exp_1')}</Text>
      <Text align="justify">{t('exp_2')}</Text>
      <Text align="justify">{t('exp_3')}</Text>
      <Text align="justify">{t('exp_4')}</Text>
      <Text align="justify">{t('exp_5')}</Text>
      <Text align="justify">{t('exp_6')}</Text>
      <Text align="justify">{t('exp_7')}</Text>
      <Text align="justify">{t('exp_8')}</Text>

      <NavLink route="/contacts" align="center" sx={{ my: 0 }}>
        {t('contact_me')}
      </NavLink>
    </Box>
  );
};
