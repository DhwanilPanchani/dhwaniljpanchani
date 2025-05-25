// src/components/common/Footer.jsx
import React from 'react';
import SocialIcons from './SocialIcons';
import { personalInfo } from '../../utils/data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Dhwanil Panchani</h3>
            <p className="footer-tagline">
              Software Engineer & ML Engineer
            </p>
            <SocialIcons className="footer-social" />
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Navigation</h4>
              <ul className="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4 className="footer-links-title">Contact</h4>
              <ul className="footer-contact">
                <li>
                  <a href={`mailto:${personalInfo.email}`}>
                    <span>Email:</span> {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>
                    <span>Phone:</span> {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <address>
                    <span>Location:</span> {personalInfo.location}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Dhwanil Panchani. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed and built with <span className="heart">❤️</span> by Dhwanil Panchani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;