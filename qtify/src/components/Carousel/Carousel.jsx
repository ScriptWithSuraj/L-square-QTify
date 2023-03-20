import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
function Carousel({ cardData }) {
  console.log("card data from carousel", cardData);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cardData.map((e) => (
        <SwiperSlide id={e.id}>
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
