import React from 'react';
import './style.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href='/'>
          <img src="/logo.png" alt="SaveWater" />
          </a>
        </div>
        <div className="header__title">
          <h1>SaveWater</h1>
        </div>
        <div className="header__actions">
          <a href="/" className="header__icon">
            <img src="/water.png" alt="Water drop" />
          </a>
          <a href="/login" className="header__icon">
            <img src="/login.png" alt="Login" />
          </a>
          <a href="/login" className="header__icon">
            <img src="/singout.png" alt="Singout" />
          </a>
          <button className="header__button">Registre-se</button>
        </div>
      </div>
    </header>
  );
};

export default Header;