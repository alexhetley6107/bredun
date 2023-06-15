import { Layout } from '@/shared/ui';
import { Projects, SideMenu } from '@/widgets';
import { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <Projects />
      <SideMenu />
    </Layout>
  );
};

export default ProjectsPage;
