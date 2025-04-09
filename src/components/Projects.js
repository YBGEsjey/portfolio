// src/components/Projects.js
import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link" onClick={(e) => {
                if (project.title === "Enterprise Active Directory Implementation") {
                  e.preventDefault();
                  alert("This project is currently Work In Progress");
                }
              }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.title === "Enterprise Active Directory Implementation" && (
                    <div className="wip-badge">WIP</div>
                  )}
                  <div className="project-overlay">
                    <div className="project-preview">
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span className="tech-tag" key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background-color: var(--background-color);
          padding: 7rem 0;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }
        
        .project-card {
          background-color: var(--card-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .project-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .project-image {
          height: 280px;
          position: relative;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 113, 227, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .wip-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background-color: #ff9500;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .project-preview {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          font-size: 1.2rem;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        
        .project-card:hover .project-preview {
          transform: translateY(0);
          opacity: 1;
        }
        
        .project-info {
          padding: 2rem;
        }
        
        .project-info h3 {
          margin-bottom: 1rem;
          color: var(--dark-color);
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }
        
        .project-info p {
          color: var(--secondary-color);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        
        .tech-tag {
          background-color: rgba(0, 0, 0, 0.05);
          color: var(--dark-color);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;