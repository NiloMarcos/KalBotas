import React from 'react';

import Banner from '../../assets/banner-1.jpg';

import Banner2 from '../../assets/banner-2.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';

import './styles.scss';

export function SliderBanners() {
  return (
    <div className='div-banner-principal' id='home'>
      <Carousel
        autoPlay={true}
        autoFocus={true}
        infiniteLoop={true}
      >
        <div>
            <img src={Banner} />
        </div>
        <div>
            <img src={Banner2} />
        </div>
      </Carousel>
      
      {/* <img src={Banner} alt="Banner Principal" className='banner-principal' /> */}
    </div>
  )
}