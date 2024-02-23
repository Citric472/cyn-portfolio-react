// components/Skills.js

import React from 'react';

const Skills = () => {
  const frontEndSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Responsive Design",
    "CSS Frameworks (e.g., Bootstrap, Tailwind CSS)",
    "Front-end Build Tools (Webpack, Babel)",
    "State Management (Redux, Vuex)",
  ];

  const backEndSkills = [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Databases (MongoDB, MySQL, PostgreSQL)",
    "Server-side Templating (e.g., EJS, Handlebars)",

  ];

  const otherSkills = [
    "Version Control (Git)",
    "Command Line/Shell",
    "Web Performance Optimization",
    "DevOps and Deployment",
    "Testing (Unit Testing, Integration Testing)",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Containerization (Docker)",
    "Cloud Services (AWS, Heroku, Netlify)",
    "Agile/Scrum Methodology",
    "Problem Solving",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <h3>Front-end Development</h3>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Back-end Development</h3>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Other Skills</h3>
          <ul>
            {otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

