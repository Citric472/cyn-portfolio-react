// components/Projects.js

import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: "Movie Recommendation App",
      description: "Built a fully functional movie recommendation app with a Browse, movie a Tv show lists, and watchlist functionality.",
      technologies: "React, Redux, Node.js, Express, MongoDB",
      githubLink: "https://github.com/DavisOmbuki/Cinemate",
      
    },
    {
      title: "Lyrics Finder App",
      description: "Developed a lyrics Finder application with a like functionality that fetched song lyrics from an external API and was able to store liked songs in the db.json",
      technologies: "JavaScript, Node.js, Express, MongoDB, JWT",
      githubLink: "https://github.com/Citric472/lyrics-finder",
    
    },
    {
      title: "Portfolio Website",
      description: "Designed and implemented a personal portfolio website to showcase skills, projects, and experience.",
      technologies: "React, CSS, GitHub Pages",
      githubLink: "https://github.com/example/portfolio-website",
      demoLink: "https://example-portfolio.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

