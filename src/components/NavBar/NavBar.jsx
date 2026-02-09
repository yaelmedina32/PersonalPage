import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar glass">
      <a href="/" className='logo-text logoPortfolio'>
        <span className="logo-dot">•</span>
        Gerardo Medina
      </a>
      
      {/* Botón hamburguesa */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de navegación */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/" className="nav-link" onClick={closeMenu}>Home</a></li>
        <li><a href="/about" className="nav-link" onClick={closeMenu}>About</a></li>
        <li><a href="/technologies" className="nav-link" onClick={closeMenu}>Skills</a></li>
        <li><a href="/social" className="nav-link" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Overlay para cerrar el menú en móvil */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;