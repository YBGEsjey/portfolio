// src/components/Contact.js
import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit to Formspree
    fetch("https://formspree.io/f/xvgprvro", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Oops! Something went wrong. Please try again later."
      });
    });
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="contact-container">
          <div className="contact-card">
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Write your name here.."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Let us know how to contact you back.."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="What would you like to tell us.."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
            
            <div className="contact-info">
              <span><i className="fas fa-envelope"></i> {portfolioData.contactEmail}</span>
              <span><i className="fas fa-phone"></i> {portfolioData.phone}</span>
              <span><i className="fas fa-map-marker-alt"></i> {portfolioData.location}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--light-color);
          padding: 7rem 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .contact-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4rem;
        }
        
        .contact-card {
          background-color: white;
          padding: 3rem 4rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          width: 100%;
          max-width: 1200px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
          margin-bottom: 2rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.8rem;
          font-weight: 500;
          color: var(--dark-color);
          font-size: 1.1rem;
          letter-spacing: -0.01em;
        }
        
        .form-control {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-family: inherit;
          font-size: 1.1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background-color: rgba(0, 0, 0, 0.02);
          letter-spacing: -0.01em;
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.1);
        }
        
        .submit-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 1.1rem 1.5rem;
          border-radius: 22px;
          cursor: pointer;
          font-weight: 500;
          width: 100%;
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          font-size: 1.1rem;
          letter-spacing: -0.01em;
        }
        
        .submit-btn:hover {
          background-color: #0062cc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
        }
        
        .form-message {
          padding: 1rem;
          margin-bottom: 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
        }
        
        .form-message.success {
          background-color: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.2);
        }
        
        .form-message.error {
          background-color: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.2);
        }
        
        .contact-info {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          color: var(--secondary-color);
        }
        
        .contact-info i {
          margin-right: 0.8rem;
          color: var(--primary-color);
        }
        
        .contact-info span {
          display: flex;
          align-items: center;
          font-size: 1.05rem;
          letter-spacing: -0.01em;
        }
        
        @media (max-width: 768px) {
          .contact-card {
            padding: 2rem;
          }
          
          .submit-btn {
            padding: 0.8rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;