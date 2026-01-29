import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-animation"></div>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-content">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">
                <span className="gradient-text">Kumar K</span>
              </h1>
              <h2 className="hero-title">AI & Data Science Student</h2>
              <p className="hero-description">
                Passionate about leveraging artificial intelligence and data science 
                to solve real-world problems. Currently pursuing my degree with a 
                focus on machine learning, deep learning, and data analytics.
              </p>
              
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-gradient">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline-gradient">
                  View Projects
                </a>
              </div>

              <div className="hero-social">
                <a href="https://github.com/Kumarank24" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/kumar-k" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:kumar@example.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="hero-image">
              <div className="image-container">
                <div className="gradient-border"></div>
                <div className="profile-placeholder">
                  <span>KK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
