import React from 'react'
import SubHeading from 'components/subHeading'
import { showOnScroll } from 'utils/functions'
import { projects } from 'data/data'
import '../styles.css'
import './projectsStyles.css'

const Projects = () => {
  showOnScroll('projects');

  const info = (item) => (
    <div className="project-info">
      <h3 className="project-name">{item['name']}</h3>
      <div className="description">{item['description']}</div>
      {
        item['github'] ?
        <span><a href={item['github']} className="link project-link" target="_blank"><i className="fab fa-github"></i></a></span>
        : null
      }
      <span><a href={item['github']} className="link project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a></span>
      <div className="project-tools">
      {
        item['tools'].map((tool, index) => (<span key={'project' + item['name'] + index}>{tool} &nbsp;</span>))
      }
      </div>
    </div>
  )

  const image = (item) => (
    <div className="project-image-container">
      <img className="project-image" src={item['image']} />
    </div>
  )

  const contents = projects.map((item, index) => {
    return (
      <div key={'project-' + index.toString()} className="project-item">
        {
          window.innerWidth <= 714 ? // store in state!!!
          [image(item), info(item)]
          :
            index % 2 == 0 ?
            [image(item), info(item)]
            :
            [info(item), image(item)]
        }
      </div>
    );
  });

  return (
    <div className="projects sub-content" id="projects">
      <SubHeading number="10" text="Projects"/>
      <div className="projects-content">
        {contents}
      </div>
    </div>
  )
}

export default Projects;
