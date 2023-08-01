import React, { useState } from 'react';
import ImageContainer from '../ImageContainer';

type Props = {
  current: Photo['fileId'];
  photos: Photo[];
  closePopup: () => void;
};
const controlClasses = 'z-50 bg-white p-2 cursor-pointer';

const Popup = ({ photos, current, closePopup }: Props): JSX.Element => {
  const [currentPhoto, setCurrentPhoto] = useState<Photo>(
    photos.find((photo) => photo.fileId === current) || photos[0]
  );

  const nexStep = () => {
    const currentIndex = photos.findIndex(
      (photo) => photo.fileId === currentPhoto?.fileId
    );
    if (currentIndex === photos.length - 1) {
      return;
    }
    const nextPhoto = photos[currentIndex + 1];
    setCurrentPhoto(nextPhoto);
  };

  const prevStep = () => {
    const currentIndex = photos.findIndex(
      (photo) => photo.fileId === currentPhoto?.fileId
    );
    if (currentIndex === 0) {
      return;
    }
    const prevPhoto = photos[currentIndex - 1];
    setCurrentPhoto(prevPhoto);
  };

  return (
    <div
      onClick={() => {
        console.log('click');
        closePopup();
      }}
      className="fixed bg-black bg-opacity-90 z-50 top-0 left-0 h-full w-full"
    >
      <div
        className="h-full w-full flex justify-center items-center"
        onClick={(e) => {
          closePopup();
          e.stopPropagation();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        {/* <div className={controlClasses} onClick={prevStep}>
          Prev
        </div> */}
        <div
          className="flex justify-center flex-col opacity-100 max-h-5/6"
          style={{ height: '90%' }}
        >
          <ImageContainer photo={currentPhoto} />
        </div>
        {/* <div className={controlClasses} onClick={nexStep}>
          Next
        </div> */}
      </div>
    </div>
  );
};

export default Popup;
