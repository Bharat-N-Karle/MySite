import React from 'react';
import '../CSS/Skills.css'; // Importing the CSS file
import htmlLogo from '../Image/html.svg';
import cssLogo from '../Image/css.svg';
import JavascriptLogo from '../Image/javascript.svg'
import NodejsLogo from '../Image/node-js.svg'
import JavaLogo from '../Image/java.svg'
import BootstrapLogo from '../Image/bootstrap.svg'
import ReactLogo from '../Image/reac.svg'
const Skills = () => {
  return (
    <div id='section1' className="skills-container">
      <h2>Web Developer Skills</h2>
      <div className="skills-grid">
      <div style={{ display: 'flex', gap: '50px' }}>
            <img src={htmlLogo} alt="HTML" width={110} height={110} />
            <img src={cssLogo} alt="CSS" width={110} height={110} />
            <img src={JavascriptLogo} alt="JavaScript" width={110} height={110} />
            <img src={NodejsLogo} alt="NODEJS" width={110} height={110} />
            <img src={JavaLogo} alt="JAVA" width={110} height={110} />
            <img src={BootstrapLogo} alt="BOOTSTRAP" width={110} height={110} />
            <img src={ReactLogo} alt="REACT" width={110} height={110} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
