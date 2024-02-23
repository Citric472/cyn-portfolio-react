
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Cynthia Langat</h1>
      <p>Full-stack Developer</p>
      <nav>
        <ul>
          <li><a href="#about" className="active">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;