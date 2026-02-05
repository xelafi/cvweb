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
          <a 
            href="https://www.linkedin.com/in/alexandre-filipe-6a31772ab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar__linkedin"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <button className="navbar__toggle" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
