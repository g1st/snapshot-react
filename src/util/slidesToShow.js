// @flow
export const slidesToShow = (width: number) => {
  if (width > 1300) {
    return 3;
  }

  if (width > 600) {
    return 2;
  }

  return 1;
};
