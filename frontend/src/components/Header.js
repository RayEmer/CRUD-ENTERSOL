import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <a href="/"><img src={logo} alt="Logo" className="app-logo" /></a>
      <nav className="titulos-header">
        <a href="/">Inicio</a>
        <a href="/acerca">Acerca de</a>
      </nav>
    </header>
  );
};

export default Header;
