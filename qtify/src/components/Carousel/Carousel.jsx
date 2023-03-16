import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
function Carousel({ cardData }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cardData.map((e) => (
        <SwiperSlide>
          <Card
            image={e.image}
            follows={e.follows}
            title={e.title}
            key={e.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
