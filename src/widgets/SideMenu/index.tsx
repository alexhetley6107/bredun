import React, { FC, useEffect, useState } from 'react';
import {
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useToggleColorMode } from '@/shared/lib';
import { useTranslate } from '@/shared/hooks';
import { Burger } from '@/features';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '32px',
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

  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((o) => !o);

  const toggleTheme = useToggleColorMode();

  const handleToggleLang = () => {
    const lang = window.localStorage.getItem('bredun_lang');
    if (!lang) {
      setLang('en');
    }
    if (lang === 'en') {
      setLang('ru');
    } else {
      setLang('en');
    }
  };

  useEffect(() => {
    handleToggleLang();
  }, []);

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
            pt: '100px',
            pb: '30px',
          }}
        >
          <List>
            {links.map((link, i) => (
              <ListItem key={i} onClick={() => push(i === 0 ? `/` : `/${link}`)} disablePadding>
                <ListBtn
                // sx={{
                //   transition: 'all 0.3s',
                //   '&:hover p': {
                //     color: 'primary.main',
                //   },
                // }}
                >
                  <Text>{t(link)}</Text>
                </ListBtn>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem disablePadding>
              <ListBtn onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkModeIcon sx={iconStyles} />
                </ListItemIcon>
                <Text>{t(palette.mode)}</Text>
              </ListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ListBtn onClick={handleToggleLang}>
                <ListItemIcon>
                  <LanguageIcon sx={iconStyles} />
                </ListItemIcon>
                <Text>{t('lang')}</Text>
              </ListBtn>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
};
