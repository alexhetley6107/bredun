import { BoxProps, IconButton } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props extends BoxProps {
  icon: React.JSX.Element;
  link: string;
}

export const LinkIcon: FC<Props> = ({ icon, link, sx }) => {
  return (
    <Link href={link} target="blank">
      <IconButton
        sx={{
          color: 'primary.main',
          svg: { fontSize: '35px' },
          bgcolor: 'secondary.light',
          '&:hover': { bgcolor: 'secondary.light' },
          ...sx,
        }}
      >
        {icon}
      </IconButton>
    </Link>
  );
};
