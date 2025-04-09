// src/components/Home.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Home = ({ handleNavClick }) => {
  return (
    <section id="home" className="home-section">
      <div className="background-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Hi, I'm {portfolioData.name}</h1>
          <h2 className="fade-in">{portfolioData.title}</h2>
          <p className="fade-in">{portfolioData.about}</p>
          <div className="social-links fade-in">
            {portfolioData.socialLinks.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noreferrer" 
                 aria-label={link.name}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          <div className="cta-buttons fade-in">
            <button className="btn primary" onClick={() => handleNavClick('projects')}>
              View My Work
            </button>
            <button className="btn secondary" onClick={() => handleNavClick('contact')}>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-section {
          background-image: url('/background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          text-align: center;
        }
        
        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        
        .container {
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: white;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .hero-content h2 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .hero-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .social-links a:hover {
          transform: translateY(-5px);
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        /* Added styling for the secondary button */
        .btn.secondary {
          background-color: #808080;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        
        .btn.secondary:hover {
          background-color: #6e6e6e;
        }
        
        /* Animation delays for fade-in elements */
        .hero-content h1 {
          animation-delay: 0.2s;
        }
        
        .hero-content h2 {
          animation-delay: 0.4s;
        }
        
        .hero-content p {
          animation-delay: 0.6s;
        }
        
        .social-links {
          animation-delay: 0.8s;
        }
        
        .cta-buttons {
          animation-delay: 1s;
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content h2 {
            font-size: 1.5rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;