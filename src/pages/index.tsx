import Head from 'next/head';
import { useToggleColorMode } from '@/shared/lib';

export default function Home() {
  const toggleColorMode = useToggleColorMode();

  return (
    <>
      <Head>
        <title>Aleks Bredun</title>
        <meta name="description" content="FrontEnd Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p onClick={toggleColorMode}>Init page</p>
      </main>
    </>
  );
}
