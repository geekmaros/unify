export const ImageList = async () => {
  return [
    {
      img: (await import("../assets/landing/Laptopphonefooter.png")).default,
    },
  ];
};
