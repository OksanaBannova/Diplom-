import React from "react";

import Review from "../Molecules/Review";



const FeedBack = () => {
  return (
    <>
      <section className="feedback" id="feedback">
        <h2 className="feedback__title">Отзывы</h2>

        <Carousel />
      </section>
    </>
  );
};

export default FeedBack;

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={60}
      naturalSlideHeight={45}
      totalSlides={5}
      visibleSlides={1}
    >
      <Slider>
        {[...Array(5).keys()].map((item) => {
          return (
            <Slide key={item} index={item} className="carousel-item">
              <Review />
            </Slide>
          );
        })}
      </Slider>
      <DotGroup className="custom_dot-group"></DotGroup>
    </CarouselProvider>
  );
};
