// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import Certificate from './components/certificate';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true,     // animasi hanya terjadi sekali saat scroll pertama
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Footer />

    </div>
  );
}


export default App;
