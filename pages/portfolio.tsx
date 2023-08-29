import React from 'react';
import { gutter, categories } from '../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';
import Link from 'next/link';
import { useIsMobile, useIsOverflow } from '../utils/hooks';

const Portfolio = () => {
  const itemWidth = 450 + gutter * 2;

  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const isMobile = useIsMobile();
  console.log('isMobile :', isMobile);
  const isOverflowed = isMobile
    ? false
    : typeof window !== 'undefined' && window
    ? window.innerWidth <= itemWidth * categories.length
    : false;

  console.log('isOverflowed :', isOverflowed);
  const HScroll = HorizontalScroll as any;

  const categoryElements = () =>
    categories.map((category, i) => (
      <Link
        href={`category/${category.slug}`}
        passHref
        key={i}
        className="bg-center bg-cover flex justify-center items-end pb-20 flex-shrink-0"
        style={{
          width: isMobile ? '200px' : '450px',
          margin: `0 ${gutter}px`,
          backgroundImage: `url(categories/${category.slug}.jpg)`,
        }}
      >
        <div className="bg-white shadow-xl py-2 px-5">
          <h2>{category.title}</h2>
        </div>
      </Link>
    ));

  return (
    <div className="h-full w-full flex justify-center" ref={ref}>
      {isOverflowed ? (
        <HScroll reverseScroll>{categoryElements()}</HScroll>
      ) : (
        categoryElements()
      )}
    </div>
  );
};

export default Portfolio;
