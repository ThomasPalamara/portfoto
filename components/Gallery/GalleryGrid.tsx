import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import Masonry from '@mui/lab/Masonry';
import Title from '../Title';
import { usePopup } from '../Contexts/PopupContext';
import { useIsMobile } from '../../utils/hooks';

type Props = { photos: Photo[]; category: Category };

const GalleryGrid: React.FC<Props> = ({ photos, category }) => {
  const { openPopup } = usePopup(photos);
  const isMobile = useIsMobile();
  const colSize = isMobile ? '49%' : '32%';
  return (
    <Masonry columns={4} spacing={2}>
      <div className="bg-white pt-8 pb-12 px-7 " style={{ width: colSize }}>
        <Title title={category?.title || ''} />
        <p className="font-light trackertext-sm">{category?.description}</p>
      </div>
      {photos.map((photo) => (
        <div
          key={photo.fileId}
          style={{
            width: colSize,
            marginBottom: gutter,
          }}
        >
          <ImageContainer
            photo={photo}
            quality={30}
            onClick={() => openPopup(photo.fileId)}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default GalleryGrid;
