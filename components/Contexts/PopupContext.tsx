import ImageKit from 'imagekit';
import React, { useState, useContext, useEffect } from 'react';
import Popup from '../Popup/Popup';

interface Toast {
  //   id: number;
  //   message: string;
  //   variant: 'error' | 'success' | 'primary';
}

type ContextProps = {
  openPopup: (currentPhoto: Photo['fileId']) => void;
  setPhotos: (photos: Photo[]) => void;
};

export const PopupContext = React.createContext<ContextProps | null>(null);

export const usePopup = (photos: Photo[]) => {
  const context = useContext(PopupContext);
  console.log('context :', context);
  if (context === null) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  context.setPhotos(photos);
  return context;
};

const Provider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photos, setPhotos] = useState<[] | Photo[]>([]);
  const [current, setCurrent] = useState<null | Photo['fileId']>(null);
  // function that set the state to true and take an array of photo and a current  photo id  as parameter
  const openPopup: ContextProps['openPopup'] = (currentPhoto) => {
    console.log('openPopup :');
    setIsOpen(true);
    setCurrent(currentPhoto);
  };

  return (
    <PopupContext.Provider value={{ openPopup, setPhotos }}>
      {children}
      {isOpen && current && (
        <Popup
          photos={photos}
          current={current}
          closePopup={() => {
            setIsOpen(false);
          }}
        />
      )}
    </PopupContext.Provider>
  );
};

export const PopupContextProvider = Provider;

export const PopupContextConsumer = PopupContext.Consumer;

export const usePopupContext = () => useContext(PopupContext);

export default PopupContext;
