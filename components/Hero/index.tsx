import Image from 'next/image';
import React from 'react';
import ImageContainer from '../ImageContainer';

const Hero: React.FC = () => {
  const name = 'Thomas Palamara';
  const titleClasses = 'uppercase font-semibold letter-wide';
  return (
    <ImageContainer src="https://ik.imagekit.io/uiw3np2kr8ww/landscape/calanques.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1632172042339" />
  );
};

export default Hero;

{
  /* <div className="hero min-h-screen h-screen bg-left-bottom bg-cover">
<div className="pt-20 mb-20 flex items-center text-center h-full">
  <div className="relative ml-5 w-1/2">
    <span
      className={`${titleClasses} text-9xl position absolute inset-x-0 opacity-30 text-transparent transform rotate-180`}
      style={{
        WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
        top: '-150%',
      }}
    >
      {name}
    </span>
    <h1 className={`${titleClasses} text-6xl`}>{name}</h1>
  </div>
</div>
</div> */
}
