import React from 'react';
import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'B.Tech in AI & Data Science'
    },
    {
      icon: <FaCode />,
      title: 'Development',
      description: 'Full Stack & ML Development'
    },
    {
      icon: <FaBrain />,
      title: 'Focus',
      description: 'Machine Learning & Deep Learning'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-content">
              <p>
                I am a passionate AI & Data Science student with a strong foundation 
                in programming, machine learning, and data analytics. My journey in 
                technology began with curiosity about how data can drive intelligent 
                decisions.
              </p>
              <p>
                Currently, I'm focused on developing practical skills in Python, 
                TensorFlow, and various data visualization tools. I enjoy working on 
                projects that solve real-world problems using artificial intelligence.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or participating in hackathons.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
