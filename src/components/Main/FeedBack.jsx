import React from "react";

import Review from "../Molecules/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeedBack = () => {
  return (
    <section className="feedback" id="feedback">
      <h2 className="feedback__title">Отзывы</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i}>
            <Review />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeedBack;