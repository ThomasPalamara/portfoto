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
          "url('https://ik.imagekit.io/uiw3np2kr8ww/DSC02174_d74Tt5iGK.jpg?updatedAt=1707668332177')",
      }}
    >
      <div className="md:opacity-0 flex justify-center items-center text-center flex-col h-full hero__title">
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
