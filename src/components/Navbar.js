import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="logo">
            <span className="gradient-text">Kumar</span> K
          </a>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
