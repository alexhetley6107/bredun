import { IconButton } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  icon: React.JSX.Element;
  link: string;
}

export const LinkIcon: FC<Props> = ({ icon, link }) => {
  return (
    <Link href={link} target="blank">
      <IconButton sx={{ mx: '20px', color: 'primary.main', svg: { fontSize: '50px' } }}>{icon}</IconButton>
    </Link>
  );
};