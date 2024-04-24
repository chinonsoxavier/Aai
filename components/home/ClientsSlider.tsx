import React,{useRef,useState} from 'react';
// import Swiper from 'swiper';
// import {Swiper,SwiperSlide} from 'swiper/modules';
import "swiper/css";
import { Swiper,SwiperSlide } from 'swiper/react';

const ClientsSlider = () => {
  return (
    <div className='text-white' >
        <Swiper slidesPerView={"auto"} spaceBetween={30} className='mySwiper ' >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ClientsSlider