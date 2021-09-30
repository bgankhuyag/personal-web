import React from 'react'
import SubHeading from 'components/subHeading/index'
import { showOnScroll } from 'utils/functions'
import '../styles.css'

const About = () => {

  showOnScroll('about');

  return (
    <div className="about sub-content" id="about">
      <SubHeading number="00" text="About" />
    </div>
  )
}

export default About;
