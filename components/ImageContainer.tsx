import React, { useState } from 'react';
import Image from 'next/image';

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
  const comp = (
    <Image
      onClick={() => onClick && onClick(photo)}
      src={'https://ik.imagekit.io/uiw3np2kr8ww' + photo.filePath}
      unoptimized
      alt=""
      width={0}
      height={0}
      className="h-full w-auto"
      {...other}
    />
  );
  if (woWrapper) return comp;
  return <figure className="h-full w-auto text-center">{comp}</figure>;
};

export default ImageContainer;
