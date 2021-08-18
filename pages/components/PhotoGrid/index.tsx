import React from 'react';
import Grid from './Grid';

interface Props {
  pictures: any;
}

const PhotoGrid = ({ pictures }: Props) => {
  return (
    <div className="container mx-auto">
      <Grid pictures={pictures} />
    </div>
  );
};

export default PhotoGrid;
