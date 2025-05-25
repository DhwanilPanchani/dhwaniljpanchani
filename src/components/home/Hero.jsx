// // src/components/home/Hero.jsx
// import React from 'react';
// import Button from '../common/Button';
// import SocialIcons from '../common/SocialIcons';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { personalInfo } from '../../utils/data';
// import './Hero.css';

// const Hero = () => {
//   const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();
//   const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);
  
//   return (
//     <section id="home" className="hero-section">
//       <div className="hero-background"></div>
//       <div className="container">
//         <div className="hero-content">
//           <div 
//             ref={textRef}
//             className={`hero-text ${textVisible ? 'animate-slideInLeft' : ''}`}
//           >
//             <span className="hero-greeting">Hello, I'm</span>
//             <h1 className="hero-name">{personalInfo.name}</h1>
//             <h2 className="hero-title">{personalInfo.title}</h2>
//             <p className="hero-description">
//             Engineer by logic, innovator by choice — blending code and intelligence to build future-ready experiences.
//             </p>
//             <div className="hero-cta">
//               <a href="#projects">
//                 <Button variant="primary" size="lg">
//                   View My Work
//                 </Button>
//               </a>
//               <a href="#contact">
//                 <Button variant="outline" size="lg">
//                   Contact Me
//                 </Button>
//               </a>
//             </div>
//             <SocialIcons className="hero-social" />
//           </div>
          
//           <div 
//             ref={imageRef}
//             className={`hero-image ${imageVisible ? 'animate-slideInRight' : ''}`}
//           >
//             <div className="image-wrapper">
//               <div className="image-background"></div>
//               <img src="/assets/profile1.jpg" alt={personalInfo.name} />
//               <div className="image-decoration"></div>
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-scroll">
//           <a href="#about" className="scroll-button">
//             <span>Scroll Down</span>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="24" 
//               height="24" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="scroll-icon animate-bounce"
//             >
//               <path d="M12 5v14M19 12l-7 7-7-7" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





// src/components/home/Hero.jsx

import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import SocialIcons from '../common/SocialIcons';
import { personalInfo } from '../../utils/data';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    // Text animation
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-in');
    }
    
    // Image animation with delay
    const imageElement = imageRef.current;
    if (imageElement) {
      setTimeout(() => {
        imageElement.classList.add('animate-in');
      }, 400);
    }
  }, []);
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient"></div>
      <div className="container">
        <div className="hero-content">
          <div ref={textRef} className="hero-text">
            <span className="greeting">Hi there, I'm</span>
            <h1 className="name">Dhwanil Panchani</h1>
            <h2 className="role">Software Engineer & ML Engineer</h2>
            <p className="bio">
            Engineer by logic, innovator by choice — blending code and intelligence to build future-ready experiences.
            </p>
            <div className="hero-cta">
              <a href="#projects">
                <Button variant="primary" size="lg">
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </div>
            <SocialIcons className="hero-social" />
          </div>
          
          <div ref={imageRef} className="hero-image">
            <div className="image-container">
              <img src="/assets/profile.jpg" alt={personalInfo.name} />
              <div className="image-shape"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <a href="#about" className="scroll-link">
            <span>Scroll</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;