import React from "react";

import Banner from '../../assets/banner-tarja.jpg'
import BannerMobile from '../../assets/banner-tarja-mobile.jpg'

import './styles.scss';

export function BannerLine() {
  return (
    <div className="container-banner-tarja" id="tarja">
      <a href="https://lojadabotina.com.br/" className="banner-tarja-desktop">
        <img src={Banner} alt="Banner tarja" />
      </a>
      <a href="https://lojadabotina.com.br/" className="banner-tarja-mobile">
        <img src={BannerMobile} alt="Banner tarja" />
      </a>
    </div>
  );
}