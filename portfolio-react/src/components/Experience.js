// components/Experience.js

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      jobTitle: "Full-Stack Developer Freelancer",
      company: "Upwork.",
      location: "Online",
      startDate: "September 2022",
      endDate: "Present", // Use "Present" if it's your current position
      responsibilities: [
        "Developing and maintaining web applications with a focus on full-stack development.",
        "Collaborating with cross-functional teams to design and implement new features.",
        "Ensuring the scalability and performance of applications through optimization techniques.",
        "Conducting code reviews and providing constructive feedback to team members.",
      ],
    },
    {
      jobTitle: "Software Developer Intern",
      company: "Kenya National Innovation Agency",
      location: "Nairobi, Kenya",
      startDate: "February 2022",
      endDate: "May  2022",
      responsibilities: [
        "Implementing user interfaces for various web projects using modern front-end technologies.",
        "Collaborating with designers to turn wireframes and mockups into responsive and visually appealing websites.",
        "Troubleshooting and debugging issues to maintain optimal website performance.",
        "Staying updated on industry trends and recommending improvements to existing processes.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.jobTitle}</h3>
            <p className="company">{experience.company}, {experience.location}</p>
            <p className="date">{experience.startDate} - {experience.endDate}</p>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

