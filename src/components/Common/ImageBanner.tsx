import Image from "next/image";

const ImageBanner = ({ tagline, backgroundImgSrc }) => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-no-repeat text-center"
      style={{ backgroundImage: `url(${backgroundImgSrc})` }}
    >
      <div className="container relative z-10 flex h-full items-center justify-center">
        <h1 className="dark: text-4xl font-bold text-white dark:text-white sm:text-5xl md:text-6xl">
          {tagline}
        </h1>
      </div>
    </div>
  );
};

export default ImageBanner;
