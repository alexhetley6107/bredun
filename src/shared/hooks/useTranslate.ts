import { useTranslation } from 'react-i18next';

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  // const changeLang = (i18n) => (language) => {
  //   window.localStorage.setItem('bredun_lang', language);
  //   i18n.changeLanguage(language);
  // };

  return { t /* , toggleLang: changeLang(i18n) */ };
};
