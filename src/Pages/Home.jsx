import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { HomeB } from "./HomeB";

export const Home = () => {
  return (
    <section className="h-[50vh]">
      <br />
      <div className="container h-full">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <img
              src="./bgi1.png"
              className="h-full w-full object-contain"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./bgi3.png"
              className="h-full w-full object-contain"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./bgi2.png"
              className="h-full w-full object-contain"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <HomeB />
    </section>
  );
};
