// src/components/Skills.js
import React, { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const skillBars = document.querySelectorAll('.skill-progress');
          skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
          });
        }
      },
      { threshold: 0.3 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-container" ref={skillsRef}>
          {portfolioData.skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <p className="skill-name">{skill.name}</p>
                <p className="skill-percentage">{skill.level}%</p>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  data-width={`${skill.level}%`} 
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Competencies</h3>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Firewalls</span>
            <span className="skill-tag">VMware</span>
            <span className="skill-tag">OpenStack</span>
            <span className="skill-tag">System Setup/Repair</span>
            <span className="skill-tag">OS Deployment</span>
            <span className="skill-tag">Troubleshooting</span>
            <span className="skill-tag">Network Monitoring</span>
            <span className="skill-tag">IP Networking</span>
            <span className="skill-tag">Ticketing Systems</span>
            <span className="skill-tag">Documentation</span>
            <span className="skill-tag">Cabling</span>
            <span className="skill-tag">macOS</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background-color: var(--light-color);
          padding: 7rem 0;
        }
        
        .skills-container {
          max-width: 800px;
          margin: 0 auto 4rem;
        }
        
        .skill-item {
          margin-bottom: 2rem;
        }
        
        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }
        
        .skill-name {
          font-weight: 500;
          font-size: 1rem;
          color: var(--dark-color);
          letter-spacing: -0.01em;
        }
        
        .skill-percentage {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        .skill-bar {
          height: 8px;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 4px;
          width: 0;
          transition: width 1.5s ease-in-out;
        }
        
        .additional-skills {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .additional-skills h3 {
          color: var(--dark-color);
          margin-bottom: 2rem;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        
        .skill-tag {
          background-color: white;
          color: var(--dark-color);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        .skill-tag:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 113, 227, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Skills;