import React, { FC } from 'react';
import { Box } from '@mui/material';
import { NavLink, Text, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';

export const Blog: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <NavLink route="/">{'... ' + t('back_to_main')}</NavLink>

      <Title>{t('blog')}</Title>

      <Text sx={{ mt: '20px' }}>{t('in_development')} ...</Text>
    </Box>
  );
};
