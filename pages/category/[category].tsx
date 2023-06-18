import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';

type Props = { photos: Photo[]; meta: any };

const Category: React.FC<Props> = ({ photos }) => {
  const [grid, setGrid] = useState(false);
  return (
    <>
      <GalleryControl grid={grid} setGrid={setGrid} />
      {grid ? (
        <GalleryGrid photos={photos} />
      ) : (
        <GallerySlide photos={photos} />
      )}
    </>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
    privateKey: process.env.IK_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
  });
  const result = await imagekit.listFiles({
    skip: 0,
    limit: 100,
    path: 'dunkeld_forest',
  });

  const meta = await imagekit.getFileMetadata('611fd7689dbb186d693ae1ae');
  return { props: { photos: result, meta: meta } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};