import { ChangeEvent, useEffect, useState } from 'react';

const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useMessageValues = () => {
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
      setNameErrorText('Please enter user name');
      isValid = false;
    }

    if (!messageData.message) {
      setMessageErrorText('Please enter your message');
      isValid = false;
    }

    if (!messageData.email) {
      setEmailErrorText('Please enter your email');
      isValid = false;
    } else if (!emailRegexp.test(messageData.email)) {
      setEmailErrorText('Invalid email address');
      isValid = false;
    }

    return isValid;
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
  };
};
