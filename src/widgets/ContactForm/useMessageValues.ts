import { useTranslate } from '@/shared/hooks';
import { ChangeEvent, useEffect, useState } from 'react';

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useMessageValues = () => {
  const { t } = useTranslate();

  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isNoChangeName, setIsNoChangeName] = useState(true);
  const [isNoChangeEmail, setIsNoChangeEmail] = useState(true);
  const [isNoChangeMessage, setIsNoChangeMessage] = useState(true);

  const [nameErrorText, setNameErrorText] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [messageErrorText, setMessageErrorText] = useState('');

  const onMessageDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') setIsNoChangeName(false);
    if (e.target.name === 'email') setIsNoChangeEmail(false);
    if (e.target.name === 'message') setIsNoChangeMessage(false);
    setMessageData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const checkIsValid = () => {
    setNameErrorText('');
    setEmailErrorText('');
    setMessageErrorText('');

    let isValid = true;

    if (!messageData.name) {
      setNameErrorText(t('name_err'));
      isValid = false;
    }

    if (!messageData.message) {
      setMessageErrorText(t('message_err'));
      isValid = false;
    }

    if (!messageData.email) {
      setEmailErrorText(t('email_err_1'));
      isValid = false;
    } else if (!emailRegexp.test(messageData.email)) {
      setEmailErrorText(t('email_err_2'));
      isValid = false;
    }

    return isValid;
  };

  const resetValues = () => {
    setMessageData({ name: '', email: '', message: '' });
    setIsNoChangeName(true);
    setIsNoChangeEmail(true);
    setIsNoChangeMessage(true);
  };

  useEffect(() => {
    if (!isNoChangeName && !isNoChangeEmail && !isNoChangeMessage) {
      checkIsValid();
    }
  }, [messageData]);

  return {
    messageData,
    onMessageDataChange,
    checkIsValid,
    nameErrorText,
    emailErrorText,
    messageErrorText,
    resetValues,
  };
};
