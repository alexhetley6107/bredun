import AppProvider from '@/app';
import type { AppProps } from 'next/app';
import { ni18nConfig } from '../../ni18n.config';
import { appWithI18Next, useSyncLanguage } from 'ni18n';

function App({ Component, pageProps }: AppProps) {
  const locale = typeof window !== 'undefined' && window.localStorage.getItem('bredun_lang');

  useSyncLanguage(locale as string);

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default appWithI18Next(App, ni18nConfig);
