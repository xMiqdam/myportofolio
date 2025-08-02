import React from 'react';
import './projects.css';
import { FaLaravel, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaJava } from 'react-icons/fa';
import { SiFlutter, SiFigma } from 'react-icons/si';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Project yang Saya Buat</h2>

        {/* === App Portfolio === */}
        <h3 className="sub-section-title">Apps Portofolio</h3>
        <br />

        {/* Project 1: D’chubite POS */}
        <div className="project-item">
          <div className="project-image project-image-apps">
            <img src="/images/Dchubite.png" alt="D’chubite POS" />
          </div>
          <div className="project-content">
            <h3 className="project-title">D’chubite POS</h3>
            <p className="project-description">
              Aplikasi POS berbasis web dan mobile yang digunakan untuk UMKM D’chubite Restaurant. Menggunakan Flutter untuk front-end mobile dan Laravel untuk backend serta dashboard web.
            </p>
            <ul className="tech-list">
              <li><SiFlutter className="tech-icon" /> Flutter</li>
              <li><FaLaravel className="tech-icon" /> Laravel</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
            </ul>
          </div>
        </div>

        {/* Project 2: Notemad */}
        <div className="project-item reverse">
          <div className="project-image project-image-apps">
            <img src="/images/notemad.png" alt="Notemad" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Notemad</h3>
            <p className="project-description">
              Aplikasi pencatatan pribadi berbasis Flutter, memungkinkan pengguna menulis dan mengatur catatan secara offline. Backend menggunakan Firebase.
            </p>
            <ul className="tech-list">
              <li><SiFlutter className="tech-icon" /> Flutter</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
              <li><FaGithub className="tech-icon" /> GitHub</li>
            </ul>
          </div>
        </div>

        {/* Project 3: Boeing Flix */}
        <div className="project-item">
          <div className="project-image project-image-apps">
            <img src="/images/Boeing.png" alt="Boeing Flix" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Boeing Flix</h3>
            <p className="project-description">
              Aplikasi Flutter yang menyajikan informasi film seperti rating dan sinopsis, dengan API eksternal sebagai sumber data utama.
            </p>
            <ul className="tech-list">
              <li><SiFlutter className="tech-icon" /> Flutter</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
              <li><FaGithub className="tech-icon" /> GitHub</li>
            </ul>
          </div>
        </div>

        {/* Project 4: Football Team */}
        <div className="project-item reverse">
          <div className="project-image project-image-apps">
            <img src="/images/footballteam.png" alt="Football Team" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Football Team</h3>
            <p className="project-description">
              Aplikasi Footballteam adalah aplikasi yang dirancang untuk memberikan informasi terkini tentang tim sepak bola, termasuk jadwal pertandingan, statistik pemain, dan berita terbaru.
            </p>
            <ul className="tech-list">
              <li><SiFlutter className="tech-icon" /> Flutter</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
              <li><FaGithub className="tech-icon" /> GitHub</li>
            </ul>
          </div>
        </div>

        {/* Project 5: Kalkulator */}
        <div className="project-item">
          <div className="project-image project-image-apps">
            <img src="/images/calculator.png" alt="Kalkulator" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Kalkulator Penghitung Luas dan Keliling</h3>
            <p className="project-description">
              Aplikasi yang dirancang untuk membantu menghitung luas dan keliling berbagai bentuk geometri seperti persegi, persegi panjang, segitiga, dan lingkaran.
            </p>
            <ul className="tech-list">
              <li><SiFlutter className="tech-icon" /> Flutter</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
              <li><FaGithub className="tech-icon" /> GitHub</li>
            </ul>
          </div>
        </div>

        {/* Project 6: Ipot Login */}
        <div className="project-item reverse">
          <div className="project-image project-image-apps">
            <img src="/images/ipot.png" alt="Ipot Login" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Login Ipot Desain</h3>
            <p className="project-description">
              Membuat ulang desain halaman login Ipot menggunakan Android Studio dan Java.
            </p>
            <ul className="tech-list">
              <li><FaJava className="tech-icon" /> Java</li>
              <li><SiFigma className="tech-icon" /> Figma</li>
              <li><FaGithub className="tech-icon" /> GitHub</li>
            </ul>
          </div>
        </div>

        {/* === Web Portfolio === */}
        <h3 className="sub-section-title">Web Portfolio</h3>
     <br></br>

        {/* Project 7: Miqdam Logistics */}
        <div className="project-item ">
          <div className="project-image project-image-web">
            <img src="/images/miqdamlogistic.png" alt="Miqdam Logistics" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Miqdam Logistics</h3>
            <p className="project-description">
              Website pengiriman barang untuk memudahkan pemesanan, pelacakan, dan pengelolaan pengiriman secara efisien.
            </p>
            <ul className="tech-list">
              <li><FaHtml5 className="tech-icon" /> HTML</li>
              <li><FaCss3Alt className="tech-icon" /> CSS</li>
              <li><FaJs className="tech-icon" /> JavaScript</li>
            </ul>
          </div>
        </div>
<br></br>
        {/* Project 8: Luxury Rental */}
        <div className="project-item reverse">
          <div className="project-image project-image-web">
            <img src="/images/felicia.png" alt="Luxury Rental" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Luxury Rental Desain</h3>
            <p className="project-description">
              Desain website untuk rental mobil mewah, mengutamakan tampilan yang elegan dan responsif.
            </p>
            <ul className="tech-list">
              <li><SiFigma className="tech-icon" /> Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
