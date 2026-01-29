import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI Image Classifier',
      description: 'Deep learning model that classifies images into multiple categories using TensorFlow and CNN architecture.',
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing large datasets with real-time filtering capabilities.',
      tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'NLP-based tool that analyzes sentiment in text data using machine learning algorithms.',
      tech: ['Python', 'NLTK', 'Scikit-learn', 'Flask'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    },
    {
      title: 'Stock Price Predictor',
      description: 'Machine learning model that predicts stock prices using historical data and LSTM networks.',
      tech: ['Python', 'Keras', 'LSTM', 'Pandas'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predictive model to identify customers likely to churn using various ML algorithms.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Seaborn'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    },
    {
      title: 'Chatbot with NLP',
      description: 'Intelligent chatbot using natural language processing for automated customer support.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      github: 'https://github.com/Kumarank24',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
