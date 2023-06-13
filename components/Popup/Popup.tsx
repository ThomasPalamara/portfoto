import React, { useEffect, useState } from 'react';
import ImageContainer from '../ImageContainer';
import useSWR from 'swr';

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
  // const [metadata, setMetadata] = useState<{ [key: string]: FileMetadata }>({});
  // console.log('metadata :', metadata);
  // useEffect(() => {
  //   // get index of current photo
  //   const currentIndex = photos.findIndex(
  //     (photo) => photo.fileId === currentPhoto?.fileId
  //   );
  //   // array of ids for the current photo and the next and previous photos
  //   const ids = [
  //     ...photos
  //       .slice(currentIndex - 1, currentIndex + 2)
  //       .map((photo) => photo.fileId),
  //   ];
  //   let meta = {} as { [key: string]: FileMetadata };
  //   console.log('ids :', ids);
  //   const promises = ids.map((id, i) => {
  //     if (id in metadata) return;
  //     else {
  //       return fetch(`/api/getMetadata?id=${id}`).then((res) => {id, res.json()});
  //       // meta[id] = res;
  //     }
  //   });
  //   if (promises.length > 0) {
  //     Promise.all(promises).then((res) => {
  //       meta = res;
  //     });
  //     setMetadata(meta);
  //   }
  // }, [currentPhoto]);

  // useEffect(() => {
  //   fetch(`/api/getFlickrImages`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('data :', data);
  //     });
  // }, []);

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
      onClick={closePopup}
      className="fixed bg-black bg-opacity-75 z-50 top-0 left-0 h-full w-full"
    >
      <div
        className="h-full w-full flex justify-center items-center"
        onClick={(e) => {
          e.stopPropagation();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <div className={controlClasses} onClick={prevStep}>
          Prev
        </div>
        <div
          className="flex justify-center flex-col opacity-100 max-h-5/6"
          style={{ height: '80%' }}
        >
          <ImageContainer photo={currentPhoto} />
        </div>
        <div className={controlClasses} onClick={nexStep}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Popup;
