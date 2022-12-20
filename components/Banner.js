import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div>
          <Image
            width={1200}
            height={1000}
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="slide 1"
            className="object-contain"
          />
        </div>
        <div>
          <Image
            width={1200}
            height={1000}
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="slide 2"
            className="object-contain"
          />
        </div>
        <div>
          <Image
            width={1200}
            height={1000}
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="slide 2"
            className="object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
