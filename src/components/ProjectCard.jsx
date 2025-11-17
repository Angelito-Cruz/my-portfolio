import React from 'react';
import './ProjectCard.css'; // We'll create this next

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
