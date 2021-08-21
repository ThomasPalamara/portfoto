import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from './components/Hero';
import PhotoGrid from './components/PhotoGrid';
import ImageKit from 'imagekit';
import { GetStaticProps } from 'next';
import shuffle from '../utils/shuffle';

type Props = {
  result: Image[];
};

const Home: React.FC<Props> = ({ result }) => {
  return (
    <div>
      <Head>
        <title>Thomas Palamara</title>
        <meta name="description" content="My photograpy portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <PhotoGrid pictures={result} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
    privateKey: process.env.IK_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
  });
  const result = await imagekit.listFiles({
    skip: 0,
    limit: 100,
  });
  return { props: { result: shuffle(result) } };
};
