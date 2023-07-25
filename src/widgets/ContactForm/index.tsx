import React, { FC, useRef } from 'react';
import { Box } from '@mui/material';
import { useTranslate } from '@/shared/hooks';
import emailjs from '@emailjs/browser';
import { Button, Input, Text } from '@/shared/ui';
import { useMessageValues } from './useMessageValues';

export const ContactForm: FC = () => {
  const { t } = useTranslate();
  const form = useRef<HTMLFormElement>(null);

  const { messageData, onMessageDataChange, checkIsValid, nameErrorText, emailErrorText, messageErrorText } =
    useMessageValues();

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!checkIsValid()) return;

    emailjs.sendForm('service_7tnhw9c', 'template_lquqnbc', form.current ?? '', 'uLhxwwX9OTALrJIJu');
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

        <Button type="submit" sx={{ my: '25px' }}>
          {t('send')}
        </Button>
      </form>
    </Box>
  );
};
