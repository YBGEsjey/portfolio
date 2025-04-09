// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h5>SOCIALS</h5>
            <ul className="footer-links">
              {portfolioData.socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <i className={link.icon}></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h5>LINKS</h5>
            <ul className="footer-links">
              <li>
                <a href="#home">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="#skills">
                  <i className="fas fa-code"></i> Skills
                </a>
              </li>
              <li>
                <a href="#projects">
                  <i className="fas fa-folder"></i> Projects
                </a>
              </li>
              <li>
                <a href="#experience">
                  <i className="fas fa-briefcase"></i> Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--dark-color);
          color: white;
          padding: 4rem 0;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
        }
        
        .footer-section {
          flex: 1;
          padding: 0 2rem;
        }
        
        .footer-section:first-child {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-section h5 {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 1rem;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          opacity: 0.8;
        }
        
        .footer-links a i {
          margin-right: 0.8rem;
          font-size: 0.85rem;
        }
        
        .footer-links a:hover {
          opacity: 1;
          color: var(--primary-color);
        }
        
        .scroll-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background-color: var(--primary-color);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-top.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .scroll-top:hover {
          background-color: #0062cc;
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 113, 227, 0.3);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-section {
            margin-bottom: 2rem;
          }
          
          .footer-section.border {
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            padding: 2rem 0;
            margin: 1rem 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

