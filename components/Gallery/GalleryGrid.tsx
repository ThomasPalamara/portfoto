import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useRef } from 'react';
import { openPopUp } from '../Contexts/PopupContext';
import ImageContainer from '../../components/ImageContainer';
import { categories, gutter } from '../../utils/constants';
import { IKImage } from 'imagekitio-react';
import Masonry from '@mui/lab/Masonry';
import { useRouter } from 'next/router';
import Title from '../Title';

type Props = { photos: Photo[] };

const Category: React.FC<Props> = ({ photos }) => {
  const router = useRouter();

  const arrPath = router.asPath.split('/');
  const page = categories.find((e) => arrPath[arrPath.length - 1] === e.slug);

  return (
    <Masonry columns={4} spacing={2}>
      <div className="bg-white pt-8 pb-12 px-7 " style={{ width: '32%' }}>
        <Title title={page?.title || ''} />
        <p className="font-light trackertext-sm">{page?.description}</p>
      </div>
      {photos.map((photo) => (
        <div
          key={photo.fileId}
          style={{
            width: '32%',
            marginBottom: gutter,
          }}
        >
          <ImageContainer
            photo={photo}
            onClick={() => openPopup(photo.fileId)}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Category;
