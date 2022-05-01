export const ImageList = async () => {
  return [
    {
      img: (await import("../assets/landing/footerhero.png")).default,
    },
  ];
};
