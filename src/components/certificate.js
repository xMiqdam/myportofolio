import React from 'react';
import './certificate.css';

function Certificate() {
  const certificates = [
    {
      title: 'Flutter App Development',
      image: '/images/dicoding1.png',
      issuer: 'Dicoding',
      date: 'Juni 2025',
      link: 'https://www.dicoding.com/certificates/XXXXXX',
    },
    {
      title: 'Belajar membuat website pemula',
      image: '/images/dicoding2.png',
      issuer: 'Dicoding',
      date: 'Juni 2024',
      link: 'https://www.buildwithangga.com/XXXXXX',
    },
    {
      title: 'React & JS Fundamentals',
      image: '/images/dicoding3.png',
      issuer: 'Dicoding',
      date: 'Juni 2024',
      link: 'https://freecodecamp.org/certification/XXXXXX',
    },
    {
      title: 'Create Website Experience with React',
      image: '/images/techomfest.png',
      issuer: 'Techomfest',
      date: 'Desember 2024',
      link: 'https://freecodecamp.org/certification/XXXXXX',
    },
  ];

  return (
    <section className="certificate-section" id="certificate">
      <div className="container">
        <h2 className="section-title">Sertifikat</h2>
        <div className="certificate-row">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img src={cert.image} alt={cert.title} className="certificate-image" />
              </a>
              <div className="certificate-info">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-meta">{cert.issuer} · {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
