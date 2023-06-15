import { Layout } from '@/shared/ui';
import { Contacts, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <Contacts />
      <SideMenu />
    </Layout>
  );
};

export default ContactsPage;
