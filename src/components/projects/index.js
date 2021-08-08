import React from 'react'
import SubHeading from 'components/subHeading'
import '../styles.css'

const Projects = () => {
  window.addEventListener("scroll", () => {
    if (document.getElementById('projects').getBoundingClientRect().top <= (window.innerHeight * 2/3) && document.getElementById('projects').getBoundingClientRect().top !== 0) {
      document.getElementById('projects').classList.add('appear');
    }
  });

  return (
    <div className="projects sub-content" id="projects">
      <SubHeading number="10" text="Projects"/>
    </div>
  )
}

export default Projects;
