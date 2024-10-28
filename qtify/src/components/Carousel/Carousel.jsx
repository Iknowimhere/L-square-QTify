import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';

const Carousel = ({ items, renderComponent }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
      <LeftArrow className='swiper-button-prev' />
      <RightArrow className='swiper-button-next' />
    </div>
  );
};

export default Carousel;
