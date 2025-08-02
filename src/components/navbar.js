import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>Miqdam Rafi</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="certificate" smooth={true} duration={500}>Certificates</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
