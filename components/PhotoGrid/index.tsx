import React, { useState } from 'react';
import Grid from './Grid';
import Nav from './Nav';

interface Props {
  pictures: Photo[];
}

const PhotoGrid = ({ pictures }: Props) => {
  const [filter, setFilter] = useState('');
  return (
    <div className="container mx-auto">
      <Nav selectedFilter={filter} selectFilter={(e) => setFilter(e)} />
      <Grid filter={filter} pictures={pictures} />
    </div>
  );
};

export default PhotoGrid;
