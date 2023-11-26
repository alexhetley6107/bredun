import { Layout } from '@/shared/ui';
import { Home, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout animatedScrollProgress>
      <Home />
      <SideMenu />
    </Layout>
  );
};

export default HomePage;
