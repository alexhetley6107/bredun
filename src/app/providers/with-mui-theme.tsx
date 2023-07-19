import React, { FC, PropsWithChildren, useState, useEffect } from 'react';
import { ColorModeContext } from '@/shared/lib';
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { useTranslate } from '@/shared/hooks';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const { setLang } = useTranslate();

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark';

    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    } else {
      setMode('light');
    }
  }, []);

  useEffect(() => {
    const lang = window.localStorage.getItem('bredun_lang');
    if (lang) {
      setLang(lang);
    } else {
      setLang('en');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode as string);
  }, [mode]);

  const toggleColorMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: 'rgba(52, 112, 255, 1)',
                },
                secondary: {
                  main: 'rgba(62, 62, 62, 1)',
                  dark: 'rgba(10, 10, 10, 1)',
                  light: 'rgba(255, 255, 255, 1)',
                },
              }
            : {
                primary: {
                  main: 'rgba(92, 177, 255, 1)',
                },
                secondary: {
                  main: 'rgba(62, 62, 62, 1)',
                  dark: 'rgba(255, 255, 255, 1)',
                  light: 'rgba(10, 10, 10, 1)',
                },
              }),
        },
        typography: {
          fontFamily: 'Montserrat',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
