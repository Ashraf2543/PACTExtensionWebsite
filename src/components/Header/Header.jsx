import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <div className="header__logo-icon">🛡️</div>
            <span className="header__logo-text">ExamMonitor</span>
          </Link>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <Link 
              to="/" 
              className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="header__nav-link"
              onClick={closeMenu}
            >
              Features
            </a>
            <a 
              href="#download" 
              className="header__nav-link"
              onClick={closeMenu}
            >
              Download
            </a>
            <a 
              href="#faq" 
              className="header__nav-link"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <Link 
              to="/privacy" 
              className={`header__nav-link ${location.pathname === '/privacy' ? 'header__nav-link--active' : ''}`}
              onClick={closeMenu}
            >
              Privacy
            </Link>
          </nav>

          <button 
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;