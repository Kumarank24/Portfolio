import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Stanford University',
      date: '2025',
      credential: '#'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera - DeepLearning.AI',
      date: '2025',
      credential: '#'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2024',
      credential: '#'
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'freeCodeCamp',
      date: '2024',
      credential: '#'
    },
    {
      title: 'SQL for Data Science',
      issuer: 'Coursera - UC Davis',
      date: '2024',
      credential: '#'
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2025',
      credential: '#'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="cert-card">
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <a href={cert.credential} className="cert-link" target="_blank" rel="noopener noreferrer">
                    View Credential <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
