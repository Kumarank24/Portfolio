import React from 'react';
import { FaPython, FaDatabase, FaChartBar, FaBrain, FaCode, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'SQL', icon: <SiMysql />, level: 85 },
        { name: 'JavaScript', icon: <FaCode />, level: 75 }
      ]
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 80 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85 },
        { name: 'Deep Learning', icon: <FaBrain />, level: 75 }
      ]
    },
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, level: 90 },
        { name: 'NumPy', icon: <SiNumpy />, level: 88 },
        { name: 'Data Visualization', icon: <FaChartBar />, level: 85 }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Jupyter', icon: <SiJupyter />, level: 90 },
        { name: 'Git', icon: <FaGitAlt />, level: 80 },
        { name: 'Databases', icon: <FaDatabase />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="row">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={catIndex * 100}>
              <div className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
