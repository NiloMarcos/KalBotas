import React, { useRef } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../../assets/logo-white.png';

import { Link } from 'react-router-dom';

import "./styles.scss";

export function Header({ active }) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};



	return (
		<header>
			<section className={ active ? 'activeBar' : 'header' }>
				<section>
					<a href="/" className='content-logo'>
						<img src={Logo} alt="Logo do Header" className='header-logo' />
					</a>
				</section>

				<section>
					<nav ref={navRef}>
					  {/* <Link to={'/'} relative='path'>Início</Link>
					  <Link to={'/'} relative='path'>Sobre nós</Link> */}
						<a href='#home'>Início</a>
						<a href='#about'>Sobre nós</a>
						<a href='#contact'>Contato</a>
						<button
							className="nav-btn nav-close-btn"
							onClick={showNavbar}>
							<FaTimes />
						</button>
					</nav>
				</section>
				
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</section>
		</header>
	);
}
