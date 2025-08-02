import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="numbered-heading">Tentang Saya</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Halo! Saya Miqdam, seorang <strong>Front-End Developer</strong> yang antusias membangun tampilan dan
            pengalaman pengguna (UI/UX) yang interaktif, cepat, dan responsif. Saya percaya bahwa desain yang baik
            harus diiringi dengan implementasi kode yang bersih dan efisien.
          </p>
          <p>
            Ketertarikan saya pada dunia pengembangan web dimulai dari rasa ingin tahu terhadap cara kerja situs
            modern. Sejak itu, saya telah fokus mengembangkan antarmuka pengguna dengan menggunakan teknologi
            seperti React, JavaScript, dan CSS modern.
          </p>
          <p>
            Saat ini, saya sedang mengembangkan berbagai proyek personal dan komersial untuk UMKM,
            dengan menekankan performa, aksesibilitas, dan desain yang mobile-first.
          </p>
          <p>Beberapa teknologi yang biasa saya gunakan:</p>
          <ul className="skills-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Flutter (UI Mobile)</li>
            <li>Version Control (Git & GitHub)</li>
          </ul>
        </div>
        <div className="about-img-wrapper">
          <div className="about-img">
            <img src="/images/miqdam.png" alt="Foto Miqdam" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
