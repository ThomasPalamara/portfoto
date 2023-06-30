import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';

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
        slidesPerView={'auto'}
        centeredSlides
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        mousewheel={{ sensitivity: 0 }}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={photo.fileId}>
            <ImageContainer photo={photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlide;
