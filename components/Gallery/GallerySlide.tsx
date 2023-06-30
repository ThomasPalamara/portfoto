import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { IKImage } from 'imagekitio-react';

type Props = {
  photos: Photo[];
};

const GallerySlide = ({ photos }: Props) => {
  return (
    <div className="overflow-x-scroll overflow-y-hidden h-full w-full">
      <Swiper
        modules={[Mousewheel]}
        spaceBetween={gutter}
        className="h-full"
        centeredSlides={true}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        mousewheel={{ sensitivity: 0 }}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={photo.fileId}>
            <IKImage
              // className="h-full m-auto"
              path={photo.filePath}
              lqip={{ active: true, quality: 20 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlide;
