import React, { FC, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { useTranslate } from '@/shared/hooks';
import emailjs from '@emailjs/browser';

export const ContactForm: FC = () => {
  const { t } = useTranslate();
  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_7tnhw9c', 'template_lquqnbc', form.current ?? '', 'uLhxwwX9OTALrJIJu');
  };

  return (
    <Box>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="viewer_name" />
        <label>Email</label>
        <input type="email" name="viewer_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Button>CONTACT</Button>
    </Box>
  );
};

//  service_7tnhw9c;
