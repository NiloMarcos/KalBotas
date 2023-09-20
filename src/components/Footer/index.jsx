import React from 'react';

import Logo from '../../assets/logo-black.png';

import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'

import './styles.scss';

export function Footer() {
  return (
    <div className='footerLayout'>
      <footer>
          <div className='footerLayout__info'>
            <section className='footerLayout__logo'>
              <img src={Logo} alt="Logo footer" />
            </section>

            <section className='footerLayout__conainer_text'>
              <p>Há mais de 22 anos, nasce a marca Kalbotas cuja tradição e qualidade transformaram em sinônimo de força e beleza em suas botinas. Uma marca autêntica em seu mercado, elaborada para quem prioriza a qualidade sem deixar de lado a simplicidade da origem caipira.</p>
            </section>

            <section className='footerLayout__contato'>
              <span>Contatos</span>

              <section className='footerLayout__phone'>
                <AiTwotonePhone />

                <p>(37) 3287-1070</p>
              </section>

              <section className='footerLayout__email'>
                <AiTwotoneMail />

                <p>hmtcalcados@gmail.com</p>
              </section>
            </section>
          </div>

          <div className='footerLayout__direitos'>
            <section>
              <p>© KalBotas - Todos os direitos reservados</p>
            </section>
          </div>
      </footer>
    </div>
  );
}