import React from 'react';
import { IKImage } from 'imagekitio-react';
import Masonry from './Masonry';
import getOptimalWidth from '../../utils/getOptimalWidth';
import FlipMove from 'react-flip-move';

interface Props {
  pictures: Photo[];
  filter: string;
}

const Grid = ({ pictures, filter }: Props) => {
  const pics = pictures;
  const rowsHeight = 300;
  return (
    // min height important for removing flickering when changing filter
    <div className="min-h-screen">
      <div>
        <FlipMove className="flex flex-row flex-wrap justify-center">
          {pics &&
            pics
              // .filter((picture: any) =>
              //   filter ? picture.tags?.includes(filter) : true
              // )
              .map(({ fileId, filePath, height, width }) => (
                <div
                  key={fileId}
                  className="p-2 overflow-hidden relative"
                  style={{
                    height: rowsHeight,
                    width: getOptimalWidth(width, height, rowsHeight),
                  }}
                >
                  <IKImage
                    // className="h-full absolute max-w-none origin-center top-0 right-0 left-0 bottom-0"
                    // style={{ height: rowsHeight }}
                    path={filePath}
                    transformation={[
                      {
                        quality: 1,
                      },
                    ]}
                    loading="lazy"
                  />
                </div>
              ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Grid;
