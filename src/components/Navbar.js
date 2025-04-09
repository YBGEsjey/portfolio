// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';
import '../App.css';

const Navbar = ({ activeSection, handleNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle navigation click and close mobile menu
  const handleClick = (section) => {
    handleNavClick(section);
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container container">
        <div className="logo">
          <span className="logo-text">Sreejon C.</span>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? 'menu-lines open' : 'menu-lines'}>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <button 
              className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('skills')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('experience')}
            >
              Experience
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => handleClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(82, 96, 117, 0.65);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navbar.scrolled {
          background-color: rgba(82, 96, 117, 0.85);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1080px;
          padding: 0 20px;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: -0.02em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        
        .nav-item {
          margin-left: 28px;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 400;
          font-size: 0.85rem;
          letter-spacing: -0.01em;
          transition: all 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px 0;
          position: relative;
          opacity: 0.8;
        }
        
        .nav-link:hover {
          opacity: 1;
          color: rgba(255, 255, 255, 0.95);
        }
        
        .nav-link.active {
          color: #9fdbff;
          opacity: 1;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(159, 219, 255, 0.3);
        }
        
        .menu-icon {
          display: none;
          cursor: pointer;
          width: 22px;
          height: 22px;
          padding: 4px;
        }
        
        .menu-lines {
          width: 22px;
          height: 14px;
          position: relative;
        }
        
        .menu-lines span {
          display: block;
          position: absolute;
          height: 1.5px;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 1.5px;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
        .menu-lines span:nth-child(1) {
          top: 0;
        }
        
        .menu-lines span:nth-child(2) {
          top: 7px;
        }
        
        .menu-lines.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 7px;
        }
        
        .menu-lines.open span:nth-child(2) {
          transform: rotate(-45deg);
          top: 7px;
        }
        
        @media (max-width: 768px) {
          .navbar {
            height: 50px;
          }
          
          .menu-icon {
            display: block;
            z-index: 15;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 270px;
            background-color: rgba(62, 76, 97, 0.92);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            flex-direction: column;
            justify-content: center;
            box-shadow: -2px 0 30px rgba(0, 0, 0, 0.25);
            transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .nav-item {
            margin: 1.5rem 0;
          }
          
          .nav-link {
            font-size: 1rem;
            padding: 10px 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;