import Head from 'next/head';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thomas Palamara</title>
        <meta name="description" content="My photograpy portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
};

export default Home;
