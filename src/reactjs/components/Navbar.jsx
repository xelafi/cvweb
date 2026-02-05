import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">MonSite</div>

        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
          <li className="navbar__item"><a className="navbar__link" href="#accueil">Accueil</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#services">Services</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#apropos">À propos</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#contact">Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <button className="navbar__toggle" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
