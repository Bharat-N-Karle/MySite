import React from 'react';
import './Skills.css'; // Importing the CSS file

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'fa-html5' },
    { name: 'CSS', icon: 'fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'React', icon: 'fa-react' },
    { name: 'Node.js', icon: 'fa-node' },
    { name: 'MongoDB', icon: 'fa-database' },
    { name: 'Git', icon: 'fa-git' },
    { name: 'Webpack', icon: 'fa-cogs' },
    { name: 'Tailwind CSS', icon: 'fa-sass' },
    { name: 'Express.js', icon: 'fa-server' },
    { name: 'TypeScript', icon: 'fa-code' },
    { name: 'API', icon: 'fa-plug' }
  ];

  return (
    <div className="skills-container">
      <h2>Web Developer Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={`fas ${skill.icon} skill-icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
