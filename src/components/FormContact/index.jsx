import React from 'react';

import Logo from '../../assets/logo-white.png';

import './styles.scss';

export function FormContact() {

  function handleFormSubmit(e) {
    e.preventDefault();

    alert('Teste...')
  }

  return (
    <div className='container-form'>
      <section>
        <img src={Logo} alt="Logo Form" />

        <p>
          Fale conosco, tire suas dúvidas, envie suas

          sugestões, solicite seu orçamento ou faça seu

          pedido. Estamos aqui para te atender!
        </p>

        <span>
          KALBOTAS <br/>

          AV. BRASÍLIA , 870 - PLANALTO <br/>

          TESTE-MG <br/>

          CEP.: 00000-000 | (00) 0000-0000 <br/>
        </span>

      </section>

      <form action="">
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder='Seu nome' 
        />

        <input 
          type="text" 
          name="email" 
          id="email" 
          placeholder='E-mail' 
        />
        
        <input 
          type="text" 
          name="contact" 
          id="contact" 
          placeholder='Contato' 
        />

        <textarea name="message" id="message" placeholder='Escreva sua mensagem!'></textarea>

        <button type='submit' onClick={() => handleFormSubmit()}>Enviar Formulário</button>
      </form>
    </div>
  );
}