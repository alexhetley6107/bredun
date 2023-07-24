import React, { FC } from 'react';
import { Box } from '@mui/material';
import { NavLink, Text, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';

export const Projects: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <NavLink route="/">{'... ' + t('back_to_main')}</NavLink>

      <Title>{t('projects')}</Title>
    </Box>
  );
};
