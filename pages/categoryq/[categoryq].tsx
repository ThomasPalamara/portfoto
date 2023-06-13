import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef } from 'react';
import { openPopUp } from '../../components/Contexts/PopupContext';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';

type Props = { photos: Photo[]; meta: any };

const Category: React.FC<Props> = ({ photos, meta }) => {
  console.log('meta :', meta);
  //open popup hook
  React.useEffect(() => {
    const importIsotop = async () => {
      const Isotope = (await import('isotope-layout')).default;

      new Isotope('.grid', {
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-sizer',
          gutter: '.grid-gutter',
        },
      });
      console.log('Isotop :', Isotope);
    };
    importIsotop();
  }, []);

  return (
    <ul className="grid">
      <div className="grid-sizer" style={{ width: '23%' }} />
      <div className="grid-gutter" style={{ width: '2%' }} />
      {photos.map((photo) => (
        <div
          key={photo.fileId}
          className="grid-item"
          style={{
            width: '23%',
            // height: (photo.height * 500) / photo.width,
            marginBottom: gutter,
          }}
        >
          <ImageContainer
            photo={photo}
            onClick={() => openPopup(photo.fileId)}
          />
        </div>
      ))}
    </ul>
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

  console.log('result :', result);
  return { props: { photos: result } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
