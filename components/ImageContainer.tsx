import React, { useState } from 'react';
import { gutter } from '../utils/constants';
import { IKImage } from 'imagekitio-react';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  onClick?: (arg0: any) => void;
};

const ImageContainer = ({ photo, onClick }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <figure
      className="h-full w-auto inline-block text-center"
      // style={{ margin: `0 ${gutter}px` }}
    >
      <a
        className="block h-full w-auto text-center"
        onClick={() => onClick && onClick(photo)}
      >
        <IKImage
          className="h-full m-auto"
          path={photo.filePath}
          lqip={{ active: true, quality: 20 }}
        />
      </a>
    </figure>
  );
};

export default ImageContainer;
