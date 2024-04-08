import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';

import { usePopup } from '../Contexts/PopupContext';
import Title from '../Title';
import { useIsMobile } from '../../utils/hooks';

type Props = { photos?: Photo[]; category: Category; isLoading: boolean };

const GallerySlide: React.FC<Props> = ({ photos, category, isLoading }) => {
  const isMobile = useIsMobile();
  const HScroll = HorizontalScroll as any;
  const { openPopup } = usePopup(photos || []);

  const galleryElements = () => [
    <div
      key="first"
      className="bg-white py-10 px-8 flex-shrink-0"
      style={{ width: '350px' }}
    >
      <Title title={category?.title || ''} />
      <p className="font-light leading-loose trackertext-sm">
        {category?.description}
      </p>
    </div>,
    ...(photos
      ? photos
          .sort((a, b) => b.customMetadata.order - a.customMetadata.order)
          .map((photo, i) => (
            <ImageContainer
              woWrapper
              photo={photo}
              key={i}
              quality={20}
              style={{ margin: `0 ${gutter}px` }}
              onClick={() => openPopup(photo.fileId)}
            />
          ))
      : []),
  ];
  console.log('galleryElements :', galleryElements());

  return (
    <div className="h-full w-full">
      {isLoading ||
        !photos ||
        (photos.length === 0 &&
          // Generate array of placeholders with random width
          [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:justify-center md:items-center bg-white"
              style={{
                margin: `0 ${gutter}px`,
                // random width between 650 and 2150
                width: Math.random() * 1500 + 650,
              }}
            >
              <div className="loader" />
            </div>
          )))}
      {photos && photos.length > 0 && (
        <HScroll reverseScroll>{galleryElements()}</HScroll>
      )}
    </div>
  );
};

export default GallerySlide;
