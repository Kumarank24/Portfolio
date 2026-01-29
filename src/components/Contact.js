import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your EmailJS credentials
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    })
    .catch(() => {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kumar@example.com',
      link: 'mailto:kumar@example.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chennai, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="row">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info">
              <h3>Let's talk about everything!</h3>
              <p>Feel free to reach out if you have any questions, project ideas, or just want to connect.</p>
              
              <div className="info-list">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.link} className="info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-title">{info.title}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-gradient submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p className="status-message success">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="status-message error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
