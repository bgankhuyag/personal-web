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
      <h3 className="project-name"><a href="#" className="link">{item['name']}</a></h3>
      <div className="description">{item['description']}</div>
      {
        item['github'] ?
        <span><a href={item['github']} className="link project-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a> &nbsp;&nbsp;</span>
        : null
      }
      {
        item['link'] ?
        <span><a href={item['github']} className="link project-link" target="_blank" rel="noreferrer"><i class="fas fa-external-link-alt"></i></a></span>
        : null
      }
    </div>
  )

  const image = (item) => (
    <div className="project-image-container" style={{marginBottom: 0}}>
      <img className="project-image" src={item['image']} alt={item['name']}/>
    </div>
  )

  const contents = projects.map((item, index) => {
    return (
      <div key={'project-' + index.toString()} className="project-item-container">
        <div className="project-item">
          {
            [image(item), info(item)]
          }
        </div>
        <div className="project-tools">
        {
          item['tools'].map((tool, index) => (<span key={'project' + item['name'] + index}>{tool} </span>))
        }
        </div>
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
