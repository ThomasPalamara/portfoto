import React from 'react';
import { gutter } from '../utils/constants';
import { IKImage } from 'imagekitio-react';

type Props = any;

const ImageContainer: React.FC<Props> = (props) => {
  return (
    <figure
      className="relative h-full w-auto inline-block text-center"
      style={{ margin: `0 ${gutter}px` }}
    >
      <a className="block relative h-full w-auto">
        {/* <img
          {...props}
          className="h-full block w-auto"
          // className="h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        /> */}
        <IKImage
          className="h-full block w-auto"
          path={props.src}
          lqip={{ active: true, quality: 20 }}
        />
      </a>
    </figure>
  );
};

export default ImageContainer;
