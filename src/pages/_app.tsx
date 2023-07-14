import AppProvider from '@/app';
import type { AppProps } from 'next/app';
// import { appWithI18Next, useSyncLanguage } from 'ni18n';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  // const locale = typeof window !== 'undefined' && window.localStorage.getItem('bredun_lang');

  // useSyncLanguage(locale as string);

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default appWithTranslation(App);
