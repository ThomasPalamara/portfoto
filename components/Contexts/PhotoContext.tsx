import React, { useState, useContext } from 'react';

interface Toast {
  //   id: number;
  //   message: string;
  //   variant: 'error' | 'success' | 'primary';
}

type ContextProps = {
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
};

export const PhotosContext = React.createContext<ContextProps | null>(null);

export const usePhotos = (photos: Photo[]) => {
  const context = useContext(PhotosContext);
  if (context === null) {
    throw new Error('usePhotos must be used within a PhotosProvider');
  }
  context.setPhotos(photos);
  return context;
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [photos, setPhotos] = useState<[] | Photo[]>([]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};

export const PhotosContextProvider = Provider;

export const PhotosContextConsumer = PhotosContext.Consumer;

export const usePhotosContext = () => useContext(PhotosContext);

export default PhotosContext;
