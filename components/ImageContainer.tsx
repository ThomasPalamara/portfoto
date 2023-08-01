import React, { useState } from 'react';
import { IKImage } from 'imagekitio-react';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  woWrapper?: boolean;
  onClick?: (arg0: any) => void;
  [key: string]: any;
};

const ImageContainer = ({
  photo,
  woWrapper = false,
  onClick,
  ...other
}: Props) => {
  const [open, setOpen] = useState(false);
  const Image = (
    <IKImage
      onClick={() => onClick && onClick(photo)}
      className="h-full m-auto"
      path={photo.filePath}
      lqip={{ active: true, quality: 20 }}
      {...other}
    />
  );
  if (woWrapper) return Image;
  return (
    <figure
      className="h-full w-auto text-center"
      // style={{ margin: `0 ${gutter}px` }}
    >
      {Image}
    </figure>
  );
};

export default ImageContainer;
