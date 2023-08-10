import React, { useState, useEffect, } from 'react';

import { Header } from '../../components/Header';

import { Footer } from '../../components/Footer';
import { SliderBanners } from '../../components/SliderBanners';
import { AboutUs } from '../../components/AboutUs';
import { BannerLine } from '../../components/BannerLine';
import { FormContact } from '../../components/FormContact';

export function Home() {
	const [ activeColor, setActiveColor ] = useState(false);

  useEffect(function(){
		function positionScroll() {
			if(window.scrollY > 15) {
				setActiveColor(true)
			} else {
				setActiveColor(false);
			}
		}

		window.addEventListener('scroll', positionScroll)
	}, []);


  return (
    <div>
      <Header active={activeColor} /> 
      <SliderBanners />
      <AboutUs />
      <BannerLine />
      <FormContact />
      <Footer />
    </div>
  );
}

