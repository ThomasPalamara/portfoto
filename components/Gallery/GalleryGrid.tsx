import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import Masonry from '@mui/lab/Masonry';
import Title from '../Title';
import { usePopup } from '../Contexts/PopupContext';

type Props = { photos: Photo[]; category: Category };

const GalleryGrid: React.FC<Props> = ({ photos, category }) => {
  const { openPopup } = usePopup(photos);

  return (
    <Masonry columns={4} spacing={2}>
      <div className="bg-white pt-8 pb-12 px-7 " style={{ width: '32%' }}>
        <Title title={category?.title || ''} />
        <p className="font-light trackertext-sm">{category?.description}</p>
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

export default GalleryGrid;
