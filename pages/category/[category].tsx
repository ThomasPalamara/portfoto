import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { categories } from '../../utils/constants';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '../../utils/hooks';
import Head from 'next/head';

const Category = () => {
  const [data, setData] = useState<Photo[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [grid, setGrid] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('grid') || 'false')
      : true
  );

  useEffect(() => {
    fetch(`/api/hello?category=${pathname?.split('/').slice(-1)}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.list);
        setLoading(false);
      });
  }, [pathname]);

  const category =
    categories.find((e) => pathname?.split('/').slice(-1)[0] === e.slug) ||
    categories[0];

  return (
    <>
      <Head>
        <title>{pathname}</title>
      </Head>
      {!isMobile && <GalleryControl grid={grid} setGrid={setGrid} />}
      {grid || isMobile ? (
        <GalleryGrid photos={data} isLoading={isLoading} category={category} />
      ) : (
        <GallerySlide photos={data} isLoading={isLoading} category={category} />
      )}
    </>
  );
};

export default Category;
