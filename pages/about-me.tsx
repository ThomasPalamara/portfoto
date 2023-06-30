import React from 'react';
import Image from 'next/image';

const aboutMe = () => {
  return (
    <div className="flex">
      <div className="w-full relative overflow-hidden">
        <Image
          src="/about-me.jpg"
          alt="picture of Thomas"
          width={0}
          height={0}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-auto"
          style={{ maxWidth: 'unset' }}
        />
      </div>
      <div className="bg-dark-gray px-6 py-12 text-xs font-extralight text-white">
        <h1 className="text-2xl text-white font-bold">About Me</h1>
        <hr className="w-20 h-1 mr-auto my-4 bg-gray-100 border-0 rounded md:my-6" />
        <p className="pb-4">
          Hello, I&apos;m Thomas, a passionate wildlife photographer captivated
          by the natural world&apos;s beauty. My journey began in 2021 during my
          hikes, surrounded by breathtaking landscapes and fascinating wildlife,
          I wanted to capture and share these mindful moments.
        </p>{' '}
        <p className="pb-4">
          As a self-taught photographer, I hone my skills through practice and
          exploration. Wildlife photography has become my specialization,
          allowing me to connect with the local fauna in parks and nature
          reserves.
        </p>{' '}
        <p className="pb-4">
          What truly inspires me is the work of photographers who strive to make
          a difference for the animals they capture through their lenses. It's
          my hope that some day, I can contribute to raising awareness and
          appreciation for the wildlife that shares our planet.
        </p>
        <p className="pb-4">
          While I may be a beginner in the field, I embrace the opportunity to
          learn and grow. Every shutter is a chance to learn more about animal
          behavior. I find joy in studying my subjects as I encounter and
          capture them in their natural habitats.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
