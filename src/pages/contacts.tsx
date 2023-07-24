import { Layout } from '@/shared/ui';
import { ContactForm, ContactLinks, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <SideMenu />
      <ContactLinks />
      <ContactForm />
    </Layout>
  );
};

export default ContactsPage;
