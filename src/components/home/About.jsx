// src/components/home/About.jsx
import React from 'react';
import Section from '../layout/Section';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../utils/data';
import './About.css';






const About = () => {
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);
  
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about me and my background"
    >
      <div className="about-content">
        <div 
          ref={imageRef}
          className={`about-image ${imageVisible ? 'animate-slideInLeft' : ''}`}
        >
          <div className="about-image-wrapper">
            <img src="/assets/about.png" alt="About Me" />
            <div className="about-image-decoration"></div>
          </div>
          <div className="about-experience">
            <div className="experience-years">2+</div>
            <div className="experience-text">
              <div>Years of</div>
              <div>Experience</div>
            </div>
          </div>
        </div>
        
        
        <div 
          ref={infoRef}
          className={`about-info ${infoVisible ? 'animate-slideInRight' : ''}`}
        >
          <h3 className="about-heading">Software Engineer & ML Enthusiast</h3>
          <p className="about-description">
            I am a passionate Software Engineer with a strong interest in Machine Learning and Data Science. 
            I graduated from Northeastern University with MS in Information Systems, 
            I combine technical expertise across multiple programming languages and frameworks 
            with a keen eye for creating innovative solutions.
          </p>
          <p className="about-description">
            My journey in software development began during my undergraduate studies, 
            where I discovered my passion for solving complex problems through coding. 
            Since then, I've worked on various projects ranging from full-stack web applications 
            to machine learning systems, constantly expanding my skill set and embracing new technologies.
          </p>
          <div className="about-details">
            <div className="detail">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{personalInfo.name}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{personalInfo.email}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{personalInfo.phone}</span>
            </div>
            <div className="detail">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{personalInfo.location}</span>
            </div>
          </div>
          <div className="about-actions">
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary">Download Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;