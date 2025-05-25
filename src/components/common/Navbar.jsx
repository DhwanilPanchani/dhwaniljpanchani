// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import { personalInfo } from '../../utils/data';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">DP</span>
          </Link>
        </div> */}
        <div className="navbar-logo">
            <a 
                href="#home" 
                className="logo-link" 
                onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <img 
                    src="/assets/images/memoji.jpg"
                    alt="Dhwanil Memoji"
                    className='logo-memoji'
                />
                {/* <span className="logo-text">DP</span> */}
            </a>
        </div>
        
        
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={handleLinkClick}>Experience</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <ThemeToggle />
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="primary" 
                size="sm"
              >
                Resume
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;