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

const Category = () => {
  const [data, setData] = useState<Photo[] | null>(null);
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

  console.log('data :', data);
  const category =
    categories.find((e) => pathname?.split('/').slice(-1)[0] === e.slug) ||
    categories[0];

  if (isLoading || !data || data?.length === 0 || data.length === 0)
    return (
      <div
        className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  return (
    <>
      {!isMobile && <GalleryControl grid={grid} setGrid={setGrid} />}
      {grid || isMobile ? (
        <GalleryGrid photos={data} category={category} />
      ) : (
        <GallerySlide photos={data} category={category} />
      )}
    </>
  );
};

export default Category;
