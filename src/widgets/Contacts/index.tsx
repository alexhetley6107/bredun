import React, { FC } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { LinkIcon, Text, Title } from '@/shared/ui';
import Link from 'next/link';
import { useTranslate } from '@/shared/hooks';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevRoundedIcon from '@mui/icons-material/LogoDevRounded';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DescriptionIcon from '@mui/icons-material/Description';

const contactLinks = [
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/aleksandr-bredun' },
  { icon: <TelegramIcon />, link: 'https://telegram.me/lexhetley' },
  { icon: <LogoDevRoundedIcon />, link: 'https://career.habr.com/al_hetley' },
];

const cvs = [
  { icon: <ContactPageIcon />, link: '/' },
  { icon: <DescriptionIcon />, link: '/' },
  { icon: <GitHubIcon />, link: 'https://github.com/alexhetley6107' },
];

export const Contacts: FC = () => {
  const { t } = useTranslate();

  return (
    <Box>
      <Box sx={{ a: { textDecoration: 'none' } }}>
        <Link href="/">
          <Text fontWeight={500} fontSize={20} lineHeight={'50px'} sx={{ color: 'primary.main' }}>
            {'< ' + t('back_to_main')}
          </Text>
        </Link>
      </Box>
      <Title>{t('contacts')}</Title>

      <Text>{t('contact_by_links')}</Text>

      <Stack direction="row" justifyContent="center">
        {contactLinks.map(({ icon, link }) => (
          <LinkIcon key={link} icon={icon} link={link} />
        ))}
      </Stack>

      <Text>{t('view_cv')}</Text>

      <Stack direction="row" justifyContent="center">
        {cvs.map(({ icon, link }) => (
          <LinkIcon key={link} icon={icon} link={link} />
        ))}
      </Stack>

      {/* Contact Form */}
    </Box>
  );
};
