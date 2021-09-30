import React from 'react'
import SubHeading from 'components/subHeading'
import { showOnScroll } from 'utils/functions'
import '../styles.css'

const Projects = () => {
  showOnScroll('projects');

  return (
    <div className="projects sub-content" id="projects">
      <SubHeading number="10" text="Projects"/>
    </div>
  )
}

export default Projects;
