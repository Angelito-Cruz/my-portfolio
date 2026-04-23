import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

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
    <>
      {/* CERTIFICATIONS SECTION */}
      <section className="cert-section">
        <h2>Certifications</h2>

        <div className="cert-container">

    {/* Badge 1 */}
    <a
      href="https://www.credly.com/badges/d4347684-5c27-4695-9497-9d0a40b30c3b/public_url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://images.credly.com/size/110x110/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png"
        alt="Credly Badge 1"
        className="cert-image"
      />
    </a>

    {/* Badge 2 */}
    <a
      href="https://www.credly.com/badges/0e64614e-15d5-4dc2-84e3-eb9fb2c04347/public_url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://images.credly.com/size/110x110/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/image.png"
        alt="Credly Badge 2"
        className="cert-image"
      />
    </a>

  </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;