// src/components/home/Experience.jsx
// import React from 'react';
import React from 'react';
import Section from '../layout/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { experiences, education } from '../../utils/data';
import './Experience.css';

const ExperienceItem = ({ data, isEven }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={elementRef} 
      className={`timeline-item ${isEven ? 'even' : 'odd'} ${isVisible ? 'animate-fadeIn' : ''}`}
    >
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="timeline-logo">
            <img src={data.logo} alt={data.company || data.institution} />
          </div>
          <div className="timeline-info">
            <h3 className="timeline-title">{data.title || data.degree}</h3>
            <h4 className="timeline-subtitle">
              {data.company || data.institution} | {data.location}
            </h4>
            <span className="timeline-period">{data.period}</span>
          </div>
          {data.diploma && (
            <div className="diploma-link">
              <a 
                href={data.diploma} 
                target="_blank" 
                rel="noopener noreferrer"
                className="diploma-button"
              >
                View Diploma
              </a>
            </div>
          )}
        </div>
        <div className="timeline-body">
          {Array.isArray(data.description) ? (
            <ul className="timeline-list">
              {data.description.map((item, index) => (
                <li key={index} className="timeline-list-item">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="timeline-text">{data.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};


// src/components/home/Experience.jsx - update ExperienceItem
// const ExperienceItem = ({ data, isEven }) => {
//   const itemRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     const itemElement = itemRef.current;
//     if (itemElement) {
//       observer.observe(itemElement);
//     }
    
//     return () => {
//       if (itemElement) {
//         observer.unobserve(itemElement);
//       }
//     };
//   }, []);
  
//   return (
//     <div 
//       ref={itemRef} 
//       className={`timeline-item ${isEven ? 'even' : 'odd'}`}
//     >
//       <div className="timeline-marker"></div>
//       <div className="timeline-content">
//         <div className="timeline-header">
//           <div className="timeline-logo">
//             <img src={data.logo} alt={data.company || data.institution} />
//           </div>
//           <div className="timeline-info">
//             <h3 className="timeline-title">{data.title || data.degree}</h3>
//             <h4 className="timeline-subtitle">
//               {data.company || data.institution} | {data.location}
//             </h4>
//             <span className="timeline-period">{data.period}</span>
//           </div>
//         </div>
//         <div className="timeline-body">
//           {Array.isArray(data.description) ? (
//             <ul className="timeline-list">
//               {data.description.map((item, index) => (
//                 <li key={index} className="timeline-list-item">{item}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="timeline-text">{data.description}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };



const Experience = () => {
  return (
    <Section
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background"
    >
      <div className="experience-container">
        <h3 className="experience-heading">Work Experience</h3>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={`exp-${index}`}
              data={exp}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
        
        <h3 className="experience-heading">Education</h3>
        <div className="timeline">
          {education.map((edu, index) => (
            <ExperienceItem 
              key={`edu-${index}`}
              data={edu}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;