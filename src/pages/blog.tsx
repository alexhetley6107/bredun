import { Layout } from '@/shared/ui';
import { Blog, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Blog />
      <SideMenu />
    </Layout>
  );
};

export default BlogPage;
