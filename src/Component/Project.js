import React from "react";
import "./Project.css"; // Import the CSS file

const projects = [
  {
    title: "Project 1",
    description: "This is a short description of Project 1. It is an exciting web development project.",
  },
  {
    title: "Project 2",
    description: "This is a short description of Project 2. It showcases my skills in backend development.",
  },
  {
    title: "Project 3",
    description: "This is a short description of Project 3. It is a mobile app development project.",
  },
  {
    title: "Project 4",
    description: "This is a short description of Project 4. It is a machine learning project.",
  },
  {
    title: "Project 5",
    description: "This is a short description of Project 5. It focuses on database management.",
  },
  {
    title: "Project 6",
    description: "This is a short description of Project 6. It is a full-stack application.",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
