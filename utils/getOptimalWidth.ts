const getOptimalWidth = (
  width: number,
  height: number,
  newHeight: number
): number => {
  console.log('width :', width);
  //   console.log('height :', height);
  if (width < height) {
    return (newHeight * 3) / 4;
  } else {
    return (newHeight * 4) / 3;
  }
};

export default getOptimalWidth;
