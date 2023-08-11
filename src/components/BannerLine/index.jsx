import React from "react";

import Banner from '../../assets/banner-tarja.jpg'

import './styles.scss';

export function BannerLine() {
  return (
    <div className="container-banner-tarja" id="tarja">
      <a href="#">
        <img src={Banner} alt="Banner tarja" />
      </a>
    </div>
  );
}