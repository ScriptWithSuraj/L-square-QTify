import React from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftNavigation } from "../../../assets/left-navigation.svg";
function CarouselLeftNav() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      style={{
        position: "absolute",
        top: "40%",
        left: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <LeftNavigation />
    </div>
  );
}

export default CarouselLeftNav;
