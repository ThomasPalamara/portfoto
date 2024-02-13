import React from 'react';
import { gutter, categories, siteTitle } from '../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';

const Portfolio = () => {
  const itemWidth = 450 + gutter * 2;

  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const isOverflowed = isMobile
    ? false
    : typeof window !== 'undefined' && window
    ? window.innerWidth <= itemWidth * categories.length
    : false;

  const HScroll = HorizontalScroll as any;

  const categoryElements = () =>
    categories.map((category, i) => (
      <Link
        href={`category/${category.slug}`}
        passHref
        key={i}
        className="bg-center bg-cover flex justify-center items-end pb-20 flex-shrink-0"
        style={{
          width: '450px',
          margin: `0 ${gutter}px`,
          backgroundImage: `url(categories/${category.slug}.jpg)`,
        }}
      >
        <div className="bg-white shadow-xl py-2 px-5">
          <h2>{category.title}</h2>
        </div>
      </Link>
    ));

  const mobileCategoryElements = () =>
    categories.map((category, i) => (
      <div
        key={i}
        className="bg-center bg-cover flex-shrink-0 w-1/2"
        style={{
          height: '300px',
          padding: `${gutter}px`,
        }}
      >
        <Link
          href={`category/${category.slug}`}
          passHref
          className="bg-center bg-cover flex justify-center items-end pb-4 h-full w-full px-3"
          style={{
            backgroundImage: `url(categories/${category.slug}.jpg)`,
          }}
        >
          <div className="bg-white shadow-xl py-2 px-5">
            <h2>{category.title}</h2>
          </div>
        </Link>
      </div>
    ));
  return (
    <>
      <Head>
        <title>{'Portfolio - ' + siteTitle}</title>
      </Head>
      <div className="h-full w-full flex justify-center" ref={ref}>
        {isMobile ? (
          mobileCategoryElements()
        ) : isOverflowed ? (
          <HScroll reverseScroll>{categoryElements()}</HScroll>
        ) : (
          categoryElements()
        )}
      </div>
    </>
  );
};

export default Portfolio;
