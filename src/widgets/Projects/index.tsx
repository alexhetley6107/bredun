import React, { FC } from 'react';
import { Box } from '@mui/material';
import { BackLink, Text, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';

export const Projects: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <BackLink />

      <Title>{t('projects')}</Title>
    </Box>
  );
};
