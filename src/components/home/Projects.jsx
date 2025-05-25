// src/components/home/Projects.jsx
// import React, { useState } from 'react';
import React, { useState, useRef, useEffect } from 'react';
import Section from '../layout/Section';
import Button from '../common/Button';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../utils/data';
import './Projects.css';

// const ProjectItem = ({ project }) => {
//   const { elementRef, isVisible } = useScrollAnimation(0.1);
  
//   return (
//     <div 
//       ref={elementRef} 
//       className={`project-card ${isVisible ? 'animate-scaleUp' : ''}`}
//     >
//       <div className="project-image">
//         <img src={project.image} alt={project.title} />
//         <div className="project-overlay">
//           <div className="project-actions">
//             <a 
//               href={project.liveLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="project-link"
//             >
//               <span>Live Demo</span>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//                 <polyline points="15 3 21 3 21 9"></polyline>
//                 <line x1="10" y1="14" x2="21" y2="3"></line>
//               </svg>
//             </a>
//             <a 
//               href={project.codeLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="project-link"
//             >
//               <span>View Code</span>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="project-content">
//         <h3 className="project-title">{project.title}</h3>
//         <p className="project-description">{project.description}</p>
//         <div className="project-tags">
//           {project.tags.map((tag, index) => (
//             <span key={index} className="project-tag">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// src/components/home/Projects.jsx - ProjectItem component update
const ProjectItem = ({ project }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const cardElement = cardRef.current;
    if (cardElement) {
      observer.observe(cardElement);
    }
    
    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, []);
  
  return (
    <div ref={cardRef} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-actions">
            {/* <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a> */}
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>View Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Here are some of my recent projects and works"
    >
      <div className="projects-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>
        <button 
          className={`filter-btn ${filter === 'ml' ? 'active' : ''}`}
          onClick={() => setFilter('ml')}
        >
          Machine Learning
        </button>
        <button 
          className={`filter-btn ${filter === 'data' ? 'active' : ''}`}
          onClick={() => setFilter('data')}
        >
          Data Science
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      
      <div className="projects-more">
        <a href="https://github.com/DhwanilPanchani" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </a>
      </div>
    </Section>
  );
};

export default Projects;


