import React, { FC, useEffect, useState } from 'react';
import {
  useMediaQuery,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { useToggleColorMode } from '@/shared/lib';
import { useTranslate } from '@/shared/hooks';
import { Burger } from '@/shared/ui';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.secondary.dark,
}));

const ListBtn = styled(ListItemButton)(({ theme }) => ({
  transition: 'all 0.3s',

  '&:hover p, &:hover svg': {
    color: theme.palette.primary.main,
  },
}));

const links = ['main', 'projects', 'contacts'];
const iconStyles = { mt: '5px', width: '35px', height: '35px', color: 'secondary.dark' };

export const SideMenu: FC = () => {
  const { t, setLang } = useTranslate();
  const { push } = useRouter();
  const { palette } = useTheme();
  const isTablet = useMediaQuery('(max-width:650px)');
  const isLaptop = useMediaQuery('(max-width:1280px)');

  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((o) => !o);

  const toggleTheme = useToggleColorMode();

  const handleToggleLang = () => {
    const lang = window.localStorage.getItem('bredun_lang');

    if (lang === 'en') {
      setLang('ru');
    } else {
      setLang('en');
    }
  };

  return (
    <Box>
      <Burger open={isOpen} onToggle={onToggle} />

      <Drawer anchor={'left'} open={isOpen} onClose={onToggle}>
        <Stack
          justifyContent="space-between"
          sx={{
            width: '310px',
            height: '100%',
            bgcolor: 'secondary.light',
            pt: isTablet ? '30px' : '100px',
            pb: '30px',
          }}
        >
          <List>
            {links.map((link, i) => (
              <ListItem key={i} onClick={() => push(i === 0 ? `/` : `/${link}`)} disablePadding>
                <ListBtn>
                  <Text sx={{ fontSize: isLaptop ? '24px' : '34px' }}>{t(link)}</Text>
                </ListBtn>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem disablePadding>
              <ListBtn onClick={toggleTheme}>
                <ListItemIcon>
                  <Brightness6Icon sx={iconStyles} />
                </ListItemIcon>
                <Text sx={{ fontSize: isLaptop ? '24px' : '34px' }}>{t(palette.mode)}</Text>
              </ListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ListBtn onClick={handleToggleLang}>
                <ListItemIcon>
                  <LanguageIcon sx={iconStyles} />
                </ListItemIcon>
                <Text sx={{ fontSize: isLaptop ? '24px' : '34px' }}>{t('lang')}</Text>
              </ListBtn>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
};
