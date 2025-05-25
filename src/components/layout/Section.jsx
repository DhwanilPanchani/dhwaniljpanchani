// src/components/layout/Section.jsx
// import React from 'react';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import './Section.css';

// const Section = ({ 
//   id, 
//   title, 
//   subtitle,
//   children,
//   className = '',
//   titleClassName = '',
//   subtitleClassName = '',
//   withoutPadding = false
// }) => {
//   const { elementRef, isVisible } = useScrollAnimation();
  
//   const sectionClasses = `
//     section 
//     ${withoutPadding ? 'no-padding' : ''} 
//     ${className}
//     ${isVisible ? 'animate-fadeIn' : ''}
//   `;
  
//   return (
//     <section id={id} className={sectionClasses} ref={elementRef}>
//       <div className="container">
//         {title && (
//           <div className="section-header">
//             <h2 className={`section-title ${titleClassName}`}>{title}</h2>
//             {subtitle && (
//               <p className={`section-subtitle ${subtitleClassName}`}>{subtitle}</p>
//             )}
//           </div>
//         )}
//         <div className="section-content">
//           {children}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section;





// src/components/layout/Section.jsx
import React, { useEffect, useRef } from 'react';
import './Section.css';

const Section = ({ 
  id, 
  title, 
  subtitle,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  withoutPadding = false
}) => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-title');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const titleElement = titleRef.current;
    if (titleElement) {
      observer.observe(titleElement);
    }
    
    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);
  
  return (
    <section id={id} className={`section ${withoutPadding ? 'no-padding' : ''} ${className}`}>
      <div className="container">
        {title && (
          <div className="section-header">
            <div className="title-wrapper" ref={titleRef}>
              <h2 className={`section-title ${titleClassName}`}>{title}</h2>
              {/* Only include the blue line inside the title, not after it */}
              <div className="title-underline"></div>
            </div>
            {subtitle && (
              <p className={`section-subtitle ${subtitleClassName}`}>{subtitle}</p>
            )}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;