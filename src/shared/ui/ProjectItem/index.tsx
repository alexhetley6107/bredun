import { ProjectType } from '@/shared/models';
import { Box, Stack } from '@mui/material';
import React, { FC } from 'react';
import { Text } from '../Text';
import Link from 'next/link';
import { useTranslate } from '@/shared/hooks';

export const ProjectItem: FC<ProjectType> = ({ img, title, description, link }) => {
  const { t } = useTranslate();

  return (
    <Box>
      <Text sx={{ color: 'primary.main', fontSize: 22, mb: '5px', mx: '10px' }}>{title}</Text>
      <Link href={link} target="blank">
        <Stack
          sx={{
            height: '170px',
            bgcolor: 'lightgreen',
            background: `url(${img}) center / cover no-repeat`,
            borderRadius: '15px',
          }}
        />
      </Link>

      <Text align="justify" sx={{ mt: '5px', mx: '10px' }}>
        {t(description)}
      </Text>
    </Box>
  );
};
