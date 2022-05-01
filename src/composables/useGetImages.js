  export const ImageList = async () => {
  return [
    {
      img: (await import("@/assets/landing/footerhero.png")).default,
      // img: new URL("../assets/landing/footerhero.png", import.meta.url)
    },
  ];
};
