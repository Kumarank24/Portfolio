import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gradient-text">Kumar</span> K
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/Kumarank24" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kumar-k" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:kumar@example.com">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="footer-text">
            <p>Made with <FaHeart className="heart-icon" /> by Kumar K</p>
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
