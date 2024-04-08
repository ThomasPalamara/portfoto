import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  quality?: number;
  woWrapper?: boolean;
  onClick?: (arg0: any) => void;
  [key: string]: any;
  onLoadingComplete?: (id: string) => void;
};

const ImageContainer = ({
  photo,
  quality = 20,
  woWrapper = false,
  onClick,
  onLoadingComplete,
  ...other
}: Props) => {
  const comp = (
    <Image
      onClick={() => onClick && onClick(photo)}
      src={
        `https://ik.imagekit.io/uiw3np2kr8ww/tr:q-${quality}` + photo.filePath
      }
      unoptimized
      alt=""
      width={0}
      height={0}
      onLoad={() => {
        onLoadingComplete && onLoadingComplete(photo.fileId);
      }}
      className="h-full w-auto cursor-pointer"
      loading="eager"
      data-id={photo.fileId}
      {...other}
    />
  );
  if (woWrapper) return comp;
  return <figure className="h-full w-auto text-center">{comp}</figure>;
};

export default ImageContainer;
