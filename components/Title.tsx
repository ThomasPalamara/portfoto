import React from 'react';

type Props = {
  title: string;
  classnames?: string;
  lineClassnames?: string;
  color?: string;
};

const Title = ({
  title,
  classnames,
  lineClassnames,
  color = 'dark-gray',
}: Props) => {
  return (
    <>
      <h1
        className={`text-2xl capitalize font-bold text-${color} ${classnames}`}
      >
        {title}
      </h1>
      <hr
        className={`w-20 h-1 mr-auto mb-4 mt-2 bg-${color} border-0 rounded md:mt-4 md:mb-6 ${lineClassnames}`}
      />
    </>
  );
};

export default Title;
