import React, { useState, useEffect } from 'react';
import './hero.css';

function Hero() {
  const texts = [
    'seorang Junior Programmer.',
    'seorang Software Engineer.',
    'pecinta Teknologi dan Inovasi.',
    'pengembang aplikasi berbasis solusi.'
  ];
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="hero-title">
          Hai, saya<br />
          <span className="highlight">Miqdam Rafi.</span>
        </h1>
        <h2 className="hero-subtitle">
          Saya <span className="typewriter-text">{currentText}<span className="cursor"></span></span>
        </h2>
        <p className="hero-description">
          Saya adalah seorang pengembang web yang berfokus pada pembuatan aplikasi yang cepat, responsif, dan ramah pengguna. Dengan latar belakang di bidang rekayasa perangkat lunak dan ketertarikan besar terhadap teknologi, saya selalu berusaha untuk menghadirkan solusi digital yang efektif dan berdampak.
          <br /><br />
          Saat ini, saya sedang mengembangkan berbagai proyek berbasis React dan Laravel, serta terus belajar dan mengeksplorasi teknologi baru di dunia pemrograman. Saya percaya bahwa teknologi seharusnya memudahkan kehidupan, bukan memperumitnya dan saya senang menjadi bagian dari solusi tersebut.
        </p>
      </div>
    </section>
  );
}

export default Hero;
