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
    title: 'Mobile App',
    description: 'Mobile App.',
    link: 'https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540araiku%252Fportfolio%26snack-channel%3DMfbPOtFRbI&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=dark&deviceColor=white&scale=auto&orientation=portrait&centered=both'
  },
  {
    title: 'Car Car',
    description: 'Car Maintenance Tracker.',
    link: 'https://carmaintenancetracker.vercel.app/'
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
