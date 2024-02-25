import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/effect-coverflow";

import "./carousel.scss";
import { TCarousel } from "./carousel.types";

function Carousel({ children }: TCarousel) {
  const swiperConfig = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    className: "swiper",
  };

  return (
    <Swiper {...swiperConfig}>
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
