import React, { FC, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslate } from '@/shared/hooks';
import emailjs from '@emailjs/browser';
import { Button, Input, Snackbar, Text } from '@/shared/ui';
import { useMessageValues } from './useMessageValues';

export const ContactForm: FC = () => {
  const { t } = useTranslate();
  const form = useRef<HTMLFormElement>(null);

  const {
    messageData,
    onMessageDataChange,
    checkIsValid,
    nameErrorText,
    emailErrorText,
    messageErrorText,
    resetValues,
  } = useMessageValues();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (!checkIsValid()) return;

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    setIsLoading(true);

    try {
      await emailjs.sendForm(serviceID, templateID, form.current ?? '', publicKey);
      setIsSuccess(true);
      resetValues();
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsError(false);
    setIsSuccess(false);
  };

  return (
    <Box>
      <Text>{t('or_mail')}</Text>

      <form ref={form} onSubmit={sendEmail}>
        <Input
          value={messageData.name}
          onChange={onMessageDataChange}
          label={t('name')}
          name="name"
          error={!!nameErrorText}
          helperText={nameErrorText}
        />
        <Input
          value={messageData.email}
          onChange={onMessageDataChange}
          label={t('email')}
          name="email"
          error={!!emailErrorText}
          helperText={emailErrorText}
        />

        <Input
          value={messageData.message}
          onChange={onMessageDataChange}
          label={t('message')}
          name="message"
          big
          error={!!messageErrorText}
          helperText={messageErrorText}
        />

        <Button type="submit" sx={{ my: '25px' }} loading={isLoading}>
          {t('send')}
        </Button>
      </form>

      <Snackbar open={isError} error onClose={handleClose} message={t('snack_err')} />
      <Snackbar open={isSuccess} onClose={handleClose} message={t('successfully_sent')} />
    </Box>
  );
};
