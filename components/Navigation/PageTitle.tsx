import React from 'react';

type Props = {
  title?: string;
};

const PageTitle = (props: Props) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '180px',
        height: '3rem',
        top: '50%',
        left: '0',
        marginTop: '115px',
        letterSpacing: '0.17em',
        fontSize: '14px',
        textTransform: 'uppercase',
        textAlign: 'center',
        cursor: 'default',
        transform: 'rotate(-90deg)',
        transformOrigin: 'left top',
        zIndex: 12,
        background: '#292929',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.title}
    </div>
  );
};

export default PageTitle;
