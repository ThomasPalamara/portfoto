import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef } from 'react';
// import { openPopUp } from '../Contexts/PopupContext';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';

type Props = { photos: Photo[] };

const Category: React.FC<Props> = ({ photos }) => {
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
            // onClick={() => openPopUp(photo.fileId)}
          />
        </div>
      ))}
    </ul>
  );
};

export default Category;
