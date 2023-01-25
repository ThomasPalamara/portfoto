import React, { useState, useContext, useEffect } from 'react';

export const PhotoContext = React.createContext<ContextProps | null>(null);

export const usePhoto = () => {
  const context = useContext(PhotoContext);
  if (context === null) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};

const Provider: React.FC<{ value: Photo[] }> = ({ children, value }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  console.log('value :', value);

  return (
    <PhotoContext.Provider value={{ photos: value }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const PhotoContextProvider = Provider;

export const PhotoContextConsumer = PhotoContext.Consumer;

export const usePhotoContext = () => useContext(PhotoContext);

export default PhotoContext;
