import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';

type Props = { photos: Photo[]; meta: any };

const Category: React.FC<Props> = ({ photos }) => {
  const [grid, setGrid] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('grid') || 'false')
      : false
  );
  console.log('grid :', grid);
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

  let category = params?.category;
  if (Array.isArray(category)) {
    category = category[0];
  }

  const result = await imagekit.listFiles({
    skip: 0,
    limit: 100,
    path: category?.replace('-', '_'),
  });

  return { props: { photos: result } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
