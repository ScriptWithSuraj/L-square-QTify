import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import Card from "../Card/Card";
import CarasouselRightNav from "./CarasouselRightNav/CarasouselRightNav";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";

// SwiperCore.use([Navigation, Pagination]);
function Carousel({ cardData, renderCaraousel }) {
  console.log("card data from carousel", cardData);
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}

      // navigation
      // pagination={{ clickable: true }}
    >
      <CarouselLeftNav />
      {cardData.map((item) => (
        <SwiperSlide key={item.id}>{renderCaraousel(item)}</SwiperSlide>
      ))}
      <CarasouselRightNav />
    </Swiper>
  );
}

export default Carousel;
