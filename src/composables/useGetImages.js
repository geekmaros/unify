export const ImageList = async () => {
  return [
    {
      img: (await import("../assets/landing/laptopandphone.png")).default,
    },
  ];
};
