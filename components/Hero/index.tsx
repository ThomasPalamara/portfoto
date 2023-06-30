import Image from 'next/image';
import React from 'react';
import ImageContainer from '../ImageContainer';
import { IKImage } from 'imagekitio-react';

const Hero: React.FC = () => {
  const name = 'Thomas Palamara';
  const titleClasses = 'uppercase font-semibold letter-wide';
  return (
    <div
      className="h-full w-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/uiw3np2kr8ww/DSC02174__Mmg8D0-W.jpg?updatedAt=1674689620421&ik-sdk-version=react-1.0.10')",
      }}
    />
  );
};

export default Hero;
