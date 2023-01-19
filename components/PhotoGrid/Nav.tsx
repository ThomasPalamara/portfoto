import React from 'react';
import upperFirst from '../../utils/upperFirst';
interface Props {
  selectedFilter: string;
  selectFilter: (arg0: string) => void;
}

const Nav = ({ selectFilter, selectedFilter }: Props) => {
  const filters = [
    {
      name: 'All',
      value: '',
    },
    {
      name: 'Landscape',
      value: 'landscape',
    },
    {
      name: 'Portrait',
      value: 'portrait',
    },
    {
      name: 'Wildlife',
      value: 'wildlife',
    },
    {
      name: 'Macro',
      value: 'macro',
    },
  ];
  return (
    <div className="container mx-auto px-60 py-10">
      <div className="flex justify-around">
        <div className="text-3xl">Filters: </div>
        <div className="flex items-center">
          {filters.map((filter) => (
            <span
              className={`px-3 cursor-pointer ${
                selectedFilter === filter.value && 'underline'
              }`}
              onClick={() => selectFilter(filter.value)}
              key={filter.value}
            >
              {upperFirst(filter.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
