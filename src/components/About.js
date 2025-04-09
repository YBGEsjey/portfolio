// src/components/About.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="overlay"></div>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>{portfolioData.about}</p>
            <p>Currently pursuing a Bachelor of Information Technology with a focus on Networking & IT Security at Ontario Tech University, expected to graduate in May 2025.</p>
            <p>My coursework includes Systems & Network Administration, Operating Systems Security, Database Systems, IT Security Policies & Procedures, DevOps and Automation, and Network Infrastructure.</p>
            <p>I'm always excited to learn more and take on new challenges that push the boundaries of my expertise.</p>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?q=80&w=2000" alt="Networking Technology" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-image: url('/background.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          padding: 5rem 0;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
        }
        
        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .about-text p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--dark-color);
        }
        
        .about-image img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-image {
            order: 1;
            margin-bottom: 2rem;
          }
          
          .about-text {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
