// src/components/Experience.js
import React from 'react';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {portfolioData.experience.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          background-color: var(--light-color);
          padding: 7rem 0;
          position: relative;
        }
        
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 4rem auto 0;
        }
        
        .timeline::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--primary-color);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
          margin-bottom: 60px;
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: white;
          border: 4px solid var(--primary-color);
          border-radius: 50%;
          top: 15px;
          z-index: 1;
          box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.2);
        }
        
        .timeline-item.left {
          left: 0;
        }
        
        .timeline-item.right {
          left: 50%;
        }
        
        .timeline-item.left::after {
          right: -10px;
        }
        
        .timeline-item.right::after {
          left: -10px;
        }
        
        .timeline-content {
          padding: 24px;
          background-color: white;
          position: relative;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-content::after {
          content: '';
          position: absolute;
          border-style: solid;
          border-width: 10px;
          top: 15px;
        }
        
        .timeline-item.left .timeline-content::after {
          border-color: transparent white transparent transparent;
          right: -20px;
        }
        
        .timeline-item.right .timeline-content::after {
          border-color: transparent transparent transparent white;
          left: -20px;
        }
        
        .timeline-date {
          display: inline-block;
          padding: 5px 15px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 20px;
          font-size: 0.9rem;
          margin-bottom: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        .timeline-content h3 {
          margin-bottom: 5px;
          color: var(--dark-color);
          font-size: 1.2rem;
          letter-spacing: -0.01em;
          font-weight: 600;
        }
        
        .timeline-content h4 {
          margin-bottom: 15px;
          color: var(--primary-color);
          font-size: 1.1rem;
          letter-spacing: -0.01em;
          font-weight: 500;
        }
        
        .timeline-content p {
          color: var(--secondary-color);
          line-height: 1.6;
          letter-spacing: -0.01em;
          font-size: 0.95rem;
        }
        
        /* Mobile view */
        @media (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }
          
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          
          .timeline-item.right {
            left: 0;
          }
          
          .timeline-item.left::after,
          .timeline-item.right::after {
            left: 18px;
          }
          
          .timeline-item.left .timeline-content::after,
          .timeline-item.right .timeline-content::after {
            left: -20px;
            border-color: transparent transparent transparent white;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;