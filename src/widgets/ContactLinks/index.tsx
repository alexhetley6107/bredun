import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { LinkIcon, NavLink, Text, Title } from '@/shared/ui';
import { useTranslate } from '@/shared/hooks';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevRoundedIcon from '@mui/icons-material/LogoDevRounded';

const contactLinks = [
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/aleksandr-bredun' },
  { icon: <TelegramIcon />, link: 'https://telegram.me/lexhetley' },
  { icon: <LogoDevRoundedIcon />, link: 'https://career.habr.com/al_hetley' },
  { icon: <GitHubIcon />, link: 'https://github.com/alexhetley6107' },
];

export const ContactLinks: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <NavLink route="/">{'... ' + t('back_to_main')}</NavLink>

      <Title>{t('contacts')}</Title>
      <Text>{t('contact_by_links')}</Text>

      <Stack direction="row" justifyContent="space-between">
        {contactLinks.map(({ icon, link }) => (
          <LinkIcon key={link} icon={icon} link={link} />
        ))}
      </Stack>
    </Box>
  );
};
