import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { categories, gutter } from '../../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';

import { usePopup } from '../Contexts/PopupContext';
import Title from '../Title';
import { useRouter } from 'next/router';

type Props = {
  photos: Photo[];
};

const GallerySlide = ({ photos }: Props) => {
  const HScroll = HorizontalScroll as any;
  const { openPopup } = usePopup(photos);
  const router = useRouter();

  const arrPath = router.asPath.split('/');
  const page = categories.find((e) => arrPath[arrPath.length - 1] === e.slug);

  return (
    <div className=" h-full w-full">
      <HScroll reverseScroll>
        <div
          className="bg-white py-10 px-8 flex-shrink-0"
          style={{ width: '350px' }}
        >
          <Title title={page?.title || ''} />
          <p className="font-light leading-loose trackertext-sm">
            {page?.description}
          </p>
        </div>

        {photos
          .sort((a, b) => b.customMetadata.order - a.customMetadata.order)
          .map((photo, i) => (
            <ImageContainer
              woWrapper
              photo={photo}
              key={i}
              style={{ margin: `0 ${gutter}px` }}
              onClick={() => openPopup(photo.fileId)}
            />
          ))}
      </HScroll>
    </div>
  );
};

export default GallerySlide;
