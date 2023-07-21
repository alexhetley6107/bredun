import React, { FC } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import { Text } from '../Text';
import { useTranslate } from '@/shared/hooks';

export const BackLink: FC = () => {
  const { t } = useTranslate();

  return (
    <Box sx={{ a: { textDecoration: 'none' } }}>
      <Link href="/">
        <Text fontWeight={500} fontSize={20} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
          {'< ' + t('back_to_main')}
        </Text>
      </Link>
    </Box>
  );
};
