import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useOnHoverOutside } from '../../utils/hooks';
import { categories } from '../../utils/constants';

type Props = {
  height: number | string;
};

const Nav: React.FC<Props> = ({ height }) => {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  const navItems = [
    {
      title: 'Home',
      slug: '/',
    },
    {
      title: 'Portfolio',
      slug: 'portfolio',
      isDropdown: true,
    },
    {
      title: 'About Me',
      slug: 'about-me',
    },
    {
      title: 'Contact',
      slug: 'contact',
    },
  ];
  return (
    <nav
      className="flex items-center justify-between flex-wrap bg-teal-500 p-6"
      style={{ height: height }}
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <svg
          className="fill-black h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight uppercase">
          Thomas Palamara
        </span>
      </div>

      <div className="flex h-full">
        {navItems.map((item, i) => (
          <>
            {!item.isDropdown ? (
              <div
                key={i}
                className="flex items-center justify-center text-center"
              >
                <Link
                  href={`${item.slug}`}
                  className='className="block mt-4 lg:inline-block lg:mt-0 text-black font-extralight tracking-widest text-sm mr-8'
                  passHref
                >
                  {item.title.toUpperCase()}
                </Link>
              </div>
            ) : (
              <div
                key={i}
                className="flex items-center justify-center text-center"
                onMouseOver={() => setMenuDropDownOpen(true)}
                ref={dropdownRef}
              >
                <span className="block mt-4 lg:inline-block lg:mt-0 text-black font-extralight tracking-widest text-sm mr-8 relative cursor-pointer">
                  {item.title.toUpperCase()}
                  {isMenuDropDownOpen && (
                    <div
                      className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="text-left" role="none">
                        {categories.map((category, i) => (
                          <div key={i} className="px-6 py-3 hover:bg-gray-100">
                            <Link href={`/category/${category.slug}`}>
                              {category.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </span>
              </div>
            )}
          </>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
