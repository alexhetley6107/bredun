import React, { FC } from 'react';
import { Box } from '@mui/material';
import { NavLink, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';
import { PROJECTS } from '@/shared/constants';
import { ProjectItem } from '@/shared/ui';

export const Projects: FC = () => {
  const { t } = useTranslate();

  return (
    <Box pb={3}>
      <NavLink route="/">{'... ' + t('back_to_main')}</NavLink>

      <Title>{t('projects')}</Title>

      {PROJECTS.map((p, i) => (
        <ProjectItem key={i} {...p} />
      ))}
    </Box>
  );
};
