import React from 'react';
import { IKImage } from 'imagekitio-react';
import Masonry from 'react-masonry-css';

interface Props {
  pictures: any;
}

const Grid = ({ pictures }: Props) => {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {pictures &&
          pictures.map((picture: any) => (
            <div key={picture.fileId}>
              <IKImage
                path={'/' + picture.name}
                transformation={[
                  {
                    quality: 1,
                  },
                ]}
                loading="lazy"
              />
            </div>
          ))}
      </Masonry>
      {console.log('result :', pictures)}
    </div>
  );
};

export default Grid;
