import React from 'react';
import { gutter, categories } from '../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';
import Link from 'next/link';

const portfolio = () => {
  const HScroll = HorizontalScroll as any;
  return (
    <div className="h-full w-full">
      <HScroll reverseScroll>
        {categories.map((category, i) => (
          <Link
            href={`category/${category.slug}`}
            passHref
            key={i}
            className="bg-center bg-cover flex justify-center items-end pb-20"
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
        ))}
      </HScroll>
    </div>
  );
};

export default portfolio;
