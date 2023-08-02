import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';

import { usePopup } from '../Contexts/PopupContext';
import Title from '../Title';

type Props = { photos: Photo[]; category: Category };

const GallerySlide: React.FC<Props> = ({ photos, category }) => {
  const HScroll = HorizontalScroll as any;
  const { openPopup } = usePopup(photos);

  return (
    <div className=" h-full w-full">
      <HScroll reverseScroll>
        <div
          className="bg-white py-10 px-8 flex-shrink-0"
          style={{ width: '350px' }}
        >
          <Title title={category?.title || ''} />
          <p className="font-light leading-loose trackertext-sm">
            {category?.description}
          </p>
        </div>

        {photos
          .sort((a, b) => b.customMetadata.order - a.customMetadata.order)
          .map((photo, i) => (
            <ImageContainer
              woWrapper
              photo={photo}
              key={i}
              quality={60}
              style={{ margin: `0 ${gutter}px` }}
              onClick={() => openPopup(photo.fileId)}
            />
          ))}
      </HScroll>
    </div>
  );
};

export default GallerySlide;
