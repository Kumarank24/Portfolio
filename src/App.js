import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
