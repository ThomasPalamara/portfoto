import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import PhotoGrid from '../components/PhotoGrid';
import ImageKit from 'imagekit';
import { GetStaticProps } from 'next';
import shuffle from '../utils/shuffle';
import { usePhotoContext } from '../components/Contexts/PhotoContext';

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
