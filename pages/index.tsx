import Head from 'next/head';
import Hero from '../components/Hero';
import { siteTitle } from '../utils/constants';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="My photograpy portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
};

export default Home;
