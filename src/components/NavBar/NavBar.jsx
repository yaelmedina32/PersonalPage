import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar glass">
      <a href="/" className='logo-text logoPortfolio'>
        <span className="logo-dot">•</span>
        Portfolio
      </a>
      <ul className="navbar-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="/about" className="nav-link">About</a></li>
        <li><a href="/technologies" className="nav-link">Skills</a></li>
        <li><a href="/social" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;