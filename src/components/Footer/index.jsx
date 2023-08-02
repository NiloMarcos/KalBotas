import React from 'react';

import Logo from '../../assets/logo-black.png';

import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'

import './styles.scss';

export function Footer() {
  return (
    <div className='footerLayout'>
      <footer>
          <section className='footerLayout__logo'>
            <img src={Logo} alt="Logo footer" />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam reprehenderit consequuntur provident deleniti eligendi ratione.</p>
          </section>

          <section className='footerLayout__contato'>
            <span>Contatos</span>

            <section className='footerLayout__phone'>
              <AiTwotonePhone />

              <p>(00) 0 0000-0000</p>
            </section>

            <section className='footerLayout__email'>
              <AiTwotoneMail />

              <p>teste@gmail.com</p>
            </section>
          </section>
      </footer>
    </div>
  );
}