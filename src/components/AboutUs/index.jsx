import React from 'react';

import Logo from '../../assets/logo-black.png';

import './styles.scss';

export function AboutUs() {
  return(
    <div id='about'>
        <div className="container-about">
          <img src={Logo} alt="Logo sobre nós" />

          <p>
          Há mais de 22 anos, nasce a marca Kalbotas cuja tradição e qualidade transformaram em sinônimo de força e beleza em suas botinas. Uma marca autêntica em seu mercado, elaborada para quem prioriza a qualidade sem deixar de lado a simplicidade da origem caipira. <br/><br/>

          O trabalho dos cafezais e sertanejos, bem como a companhia diária, lazer e emprego do vaqueiro. Aos pés de homens, mulheres e crianças, um dos ícones da vida rural é transportado para a rotina metropolitana. Homens, mulheres e crianças. <br/><br/>

          Fazer botinas é uma arte, e os anos trouxeram conforto, segurança e tradição. Proporcionamos um trabalho realizado pela paixão que temos, impulsionando a buscar garantias de excelência e inovação. Desde o design até a escolha da matéria-prima é pensado para garantir a sensação de um calçado feito sob medida para os nossos consumidores.
          </p>
        </div>
    </div>
  );
}