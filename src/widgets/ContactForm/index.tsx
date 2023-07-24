import React, { FC, useRef } from 'react';
import { Box } from '@mui/material';
import { useTranslate } from '@/shared/hooks';
import emailjs from '@emailjs/browser';
import { Button, Input, Text } from '@/shared/ui';

export const ContactForm: FC = () => {
  const { t } = useTranslate();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_7tnhw9c', 'template_lquqnbc', form.current ?? '', 'uLhxwwX9OTALrJIJu');
  };

  return (
    <Box>
      <Text>{t('or_mail')}</Text>

      <form ref={form} onSubmit={sendEmail}>
        <Input label={t('name')} type="text" name="viewer_name" />

        <Input label={t('email')} type="email" name="viewer_email" />

        <Input label={t('message')} name="message" big />
        <Button type="submit" sx={{ my: '20px' }}>
          {t('send')}
        </Button>
      </form>
    </Box>
  );
};
