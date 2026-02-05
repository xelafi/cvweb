import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Alexandre Filipe</div>

        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--active' : ''}`}>
          <li className="navbar__item"><a className="navbar__link" href="#presentation">Présentation</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#skills">Compétences</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#experiences">Expériences</a></li>
          <li className="navbar__item"><a className="navbar__link" href="#education">Formation</a></li>
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
