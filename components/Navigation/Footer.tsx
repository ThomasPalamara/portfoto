import React from 'react';
import { Instagram, LinkedIn } from '@mui/icons-material';

type Props = {
  height: number | string;
};

const Nav: React.FC<Props> = ({ height }) => {
  const socialItems = [
    {
      icon: Instagram,
      link: 'https://www.instagram.com/tomapalamara/',
    },
    {
      icon: LinkedIn,
      link: 'https://www.linkedin.com/in/thomas-palamara-a8ab36a7/',
    },
  ];
  return (
    <nav
      className="flex items-center justify-between flex-wrap py-6 font-extralight text-black text-xs"
      style={{ height: height }}
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-xs">
        © {new Date().getFullYear()} . All Rights Reserved.{' '}
        <span
          style={{
            margin: '0 8px',
            background: '#eee',
            width: '2px',
            height: '20px',
          }}
        />{' '}
      </div>
      <div className="flex h-full">
        {socialItems.map((item, i) => (
          <>
            <div
              key={i}
              className="flex items-center justify-center text-center px-1"
            >
              <a
                className="cursor-pointer"
                target="_blank"
                href={item.link}
                rel="noreferrer"
              >
                <item.icon fontSize="small" sx={{ color: '#666' }} />
              </a>
            </div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
