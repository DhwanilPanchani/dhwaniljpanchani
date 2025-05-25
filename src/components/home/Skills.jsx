// src/components/home/Skills.jsx
import React from 'react';
import Section from '../layout/Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills } from '../../utils/data';
import './Skills.css';

const SkillBar = ({ name, level, icon, isSoft = false }) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  
  return (
    <div ref={elementRef} className="skill-item">
      <div className="skill-info">
        {icon && (
          <div className="skill-icon">
            <img src={icon} alt={name} />
          </div>
        )}
        <h4 className="skill-name">{name}</h4>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            width: `${isVisible ? level : 0}%`, 
            backgroundColor: isSoft ? 'var(--color-secondary)' : 'var(--color-primary)' 
          }}
        >
          <span className="skill-percent">{level}%</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="I continuously improve my skills to deliver exceptional results"
    >
      <div className="skills-wrapper">
        <div className="skills-category">
          <h3 className="category-title">Programming Languages</h3>
          <div className="skills-grid">
            {skills.languages.map((skill, index) => (
              <SkillBar
                key={`lang-${index}`}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h3 className="category-title">Frameworks & Libraries</h3>
          <div className="skills-grid">
            {skills.frameworks.map((skill, index) => (
              <SkillBar
                key={`frame-${index}`}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h3 className="category-title">Tools & Technologies</h3>
          <div className="skills-grid">
            {skills.tools.map((skill, index) => (
              <SkillBar
                key={`tool-${index}`}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;