import React from 'react';
import Image from 'next/image';
import Title from '../components/Title';
import { useIsMobile } from '../utils/hooks';

const AboutMe = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={isMobile ? '' : 'flex flex-col md:flex-row'}
      style={{ minHeight: isMobile ? 'unset' : '80%' }}
    >
      <div
        className={`w-full relative overflow-hidden ${isMobile ? 'h-44' : ''}`}
      >
        <Image
          src="/about-me.jpg"
          alt="picture of Thomas"
          width={0}
          height={0}
          unoptimized
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            isMobile ? 'w-full top-2/3' : 'w-auto h-full top-1/2'
          }`}
          style={{ maxWidth: 'unset' }}
        />
      </div>
      <div className="bg-dark-gray px-8 py-12 text-base tracking-wide font-extralight text-white leading-normal flex flex-col justify-center">
        <Title color="white" title="About me" />
        <p className="pb-4">
          Hello, I&apos;m Thomas, a passionate wildlife photographer captivated
          by the natural world&apos;s beauty. My journey began in 2021 during my
          hikes, surrounded by breathtaking landscapes and fascinating wildlife,
          I wanted to capture and share these mindful moments.
        </p>
        <p className="pb-4">
          As a self-taught photographer, I hone my skills through practice and
          exploration. Wildlife photography has become my specialization,
          allowing me to connect with the local fauna in parks and nature
          reserves.
        </p>
        <p className="pb-4">
          What truly inspires me is the work of photographers who strive to make
          a difference for the animals they capture through their lenses.
          It&apos;s my hope that some day, I can contribute to raising awareness
          and appreciation for the wildlife that shares our planet.
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

export default AboutMe;
