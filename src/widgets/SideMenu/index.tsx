import React, { FC, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Stack, Typography, styled } from '@mui/material';
import { Burger } from './Burger';
import { useRouter } from 'next/router';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useToggleColorMode } from '@/shared/lib';
import { useTranslate } from '@/shared/hooks';

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '32px',
  color: theme.palette.secondary.dark,
}));

const links = ['main', 'projects', 'contacts'];
const iconStyles = { mt: '5px', width: '35px', height: '35px', color: 'secondary.dark' };

export const SideMenu: FC = () => {
  const { t } = useTranslate();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((o) => !o);

  const toggleTheme = useToggleColorMode();

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
                <ListItemButton
                  sx={{
                    transition: 'all 0.3s',
                    '&:hover p': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Text>{t(link)}</Text>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkModeIcon sx={iconStyles} />
                </ListItemIcon>
                <Text>dark</Text>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LanguageIcon sx={iconStyles} />
                </ListItemIcon>
                <Text>english</Text>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
};
