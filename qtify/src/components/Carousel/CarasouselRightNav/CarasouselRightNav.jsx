import React from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightNavigation } from "../../../assets/right-navigation.svg";
function CarasouselRightNav() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      style={{
        position: "absolute",
        top: "40%",
        right: 0,
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <RightNavigation />
    </div>
  );
}

export default CarasouselRightNav;
