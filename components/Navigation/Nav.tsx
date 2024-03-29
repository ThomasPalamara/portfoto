import React, { useState } from 'react';
import Link from 'next/link';
import { useIsMobile } from '../../utils/hooks';

type Props = {
  height: number | string;
};

const Nav: React.FC<Props> = ({ height }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    {
      title: 'Home',
      slug: '/',
    },
    {
      title: 'Portfolio',
      slug: '/portfolio',
      isDropdown: false,
    },
    {
      title: 'About Me',
      slug: '/about-me',
    },
    {
      title: 'Contact',
      slug: '/contact',
    },
  ];
  return (
    <nav
      className="flex flex-wrap items-center justify-between p-8"
      style={{ height: isMobile ? 'unset' : height }}
    >
      <Link href="/" className="flex items-center">
        <img style={{ maxHeight: '30px' }} src="/logo.svg" alt="logo" />
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setMobileNav(!mobileNav)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${
          !mobileNav ? 'hidden' : 'shadow-lg'
        } z-10 w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col px-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={`${item.slug}`}
                onClick={() => setMobileNav(false)}
                className="nav__link block my-2 lg:inline-block lg:my-0 text-black font-extralight tracking-widest text-sm mr-8"
                passHref
              >
                {item.title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
