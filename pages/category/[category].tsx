import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { categories } from '../../utils/constants';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';

const Category = () => {
  const [grid, setGrid] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('grid') || 'false')
      : false
  );

  const pathname = usePathname();

  const category =
    categories.find((e) => pathname?.split('/').slice(-1)[0] === e.slug) ||
    categories[0];

  const fetcher = (url: string) =>
    fetch(`${url}?category=${pathname?.split('/').slice(-1)}`).then((res) =>
      res.json()
    );

  const { data, isLoading, error } = useSWR(
    pathname ? '/api/hello' : '',
    fetcher
  );

  if (isLoading || !data || data.length === 0 || data.list.length === 0)
    return null;
  return (
    <>
      <GalleryControl grid={grid} setGrid={setGrid} />
      {grid ? (
        <GalleryGrid photos={data.list} category={category} />
      ) : (
        <GallerySlide photos={data.list} category={category} />
      )}
    </>
  );
};

export default Category;
