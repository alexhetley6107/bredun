import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (i18n: any) => (language: string) => {
    window.localStorage.setItem('bredun_lang', language);
    i18n.changeLanguage(language);
  };

  return { t, setLang: changeLang(i18n) };
};
