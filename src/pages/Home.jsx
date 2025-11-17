import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Home.css'; // We'll create this next

const projects = [
  {
    title: 'Task Manager',
    description: 'A simple task manager app built with React.',
    link: 'https://task-manager-react-kappa.vercel.app/'
  },
  {
    title: 'SmartSched',
    description: 'AI-powered scheduling system.',
    link: 'https://your-smartsched.vercel.app'
  }
];

const Home = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Home;
