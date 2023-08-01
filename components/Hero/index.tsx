import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const titleClasses = 'font-semibold letter-wide text-white';
  const dashClasses = 'hero__dash bg-white w-10 h-0.5 mx-4';
  return (
    <Link
      href="/portfolio"
      passHref
      className="h-full w-full bg-center bg-cover hero"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/uiw3np2kr8ww/DSC02174__Mmg8D0-W.jpg?updatedAt=1674689620421&ik-sdk-version=react-1.0.10')",
      }}
    >
      <div className="hidden justify-center items-center flex-col h-full hero__title">
        <h4 className={titleClasses}>My photography portfolio</h4>
        <div className="flex items-center hero__link">
          <div className={dashClasses} />
          <h2 className={titleClasses + ' text-3xl'}>Browse categories</h2>
          <div className={dashClasses} />
        </div>
      </div>
    </Link>
  );
};

export default Hero;
