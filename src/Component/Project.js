import React from "react";
import "./Project.css"; // Import the CSS file

const projects = [
  {
    title: " Implementation of Signals in xv6",
    description: "Enhanced the xv6 operating system by implementing signal handling mechanisms to enable inter-process communication and asynchronous event handling. • Signal Handling: Designed and integrated signal handling routines to allow processes to send and receive signals, improving inter-process communication.. • System Calls: Developed and implemented new system calls for signal management, including signal registration, sending, and handling. • Process Management: Modified the process scheduling and management components to support signal delivery and handling, ensuring proper synchronization and responsiveness. • Testing and Debugging: Conducted extensive testing to validate signal handling functionality, address edge cases, and ensure system stability.",
  },
  {
    title: "Project 2",
    description: "This is a short description of Project 2. It showcases my skills in backend development.",
  },
  {
    title: "Ecommerce Website",
    description: "Designed and implemented a responsive front-end using React, including features such as product listings, user authentication, and a shopping cart with dynamic pricing This is a short description of Project 3. It is a mobile app development project,  Developed RESTful APIs with Express.js to handle product management, user interactions, and order processing, ensuring efficient data handling and integration with MongoDB.• Utilized MongoDB for database management, creating schemas and models to support product catalog, user profiles, and order history. • Applied state management techniques with Redux to manage application state across various components and pages. • Conducted testing for functionality, usability, and performance to ensure a high-quality user experience and reliable application performance.",
    
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
