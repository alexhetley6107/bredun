import { Layout } from '@/shared/ui';
import { ContactLinks, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <ContactLinks />
      <SideMenu />
    </Layout>
  );
};

export default ContactsPage;
