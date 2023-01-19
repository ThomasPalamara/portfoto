import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useRef } from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';

type Props = { photos: Photo[]; meta: any };

//Todo Get correct width by getting height and determining the right width of all the photos
const Category: React.FC<Props> = ({ photos }) => {
  const containerEl = useRef<HTMLInputElement>(null);
  console.log('photos :', photos);
  const getWidthForSpecificHeight = (
    containerHeight: number,
    photo: Photo
  ): number => {
    console.log('photo.width :', photo.width);
    console.log('photo.height :', photo.height);
    console.log('containerHeight :', containerHeight);
    console.log(
      '(photo.width * containerHeight) / photo.height :',
      (photo.width * containerHeight) / photo.height
    );
    return (photo.width * containerHeight) / photo.height + gutter * 2;
  };

  const width = photos.reduce(
    (previous, current) =>
      previous +
      getWidthForSpecificHeight(
        containerEl.current?.clientHeight || 0,
        current
      ),
    0
  );

  return (
    <div ref={containerEl} className="overflow-x-auto h-full" style={{ width }}>
      <>
        {photos.map((picture) => (
          <ImageContainer key={picture.fileId} src={picture.filePath} />
        ))}
      </>
    </div>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
    privateKey: process.env.IK_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
  });
  const result = await imagekit.listFiles({
    skip: 0,
    limit: 100,
    path: params?.category as string,
  });

  const meta = await imagekit.getFileMetadata('611fd7689dbb186d693ae1ae');
  return { props: { photos: result, meta: meta } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
