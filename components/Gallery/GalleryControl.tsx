import React from 'react';
import { GridView, ViewCarouselOutlined } from '@mui/icons-material';

type Props = {
  setGrid: (arg0: boolean) => void;
  grid: boolean;
};

const GalleryControl = ({ setGrid, grid }: Props) => {
  const buttonStyle = 'cursor-pointer p-2 my-1';
  return (
    <div
      style={{
        position: 'fixed',
        padding: '0.5rem',
        top: '50%',
        right: '0',
        letterSpacing: '0.17em',
        fontSize: '14px',
        textTransform: 'uppercase',
        textAlign: 'center',
        cursor: 'default',
        transformOrigin: 'left top',
        zIndex: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        className={buttonStyle}
        style={{ background: !grid ? '#292929' : '#2d91f4' }}
        onClick={() => setGrid(true)}
      >
        <GridView fontSize="small" {...(grid && { sx: { color: 'white' } })} />
      </span>
      <span
        className={buttonStyle}
        style={{ background: grid ? '#292929' : '#2d91f4' }}
        onClick={() => setGrid(false)}
      >
        <ViewCarouselOutlined
          fontSize="small"
          {...(!grid && { sx: { color: 'white' } })}
        />
      </span>
    </div>
  );
};

export default GalleryControl;