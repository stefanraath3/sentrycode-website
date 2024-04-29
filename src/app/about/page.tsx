import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ImageBanner from "@/components/Common/ImageBanner"; // You'll need to create this component

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | SentryCode",
  description: "SentryCode's commitment to securing a world empowered by data.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <ImageBanner
        tagline="Securing a world empowered by data."
        backgroundImgSrc="/images/about/image-header.jpg"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
