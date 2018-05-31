export const slidesToShow = width => {
  if (width > 1300) {
    return 3;
  }

  if (width > 600) {
    return 2;
  }

  return 1;
};
