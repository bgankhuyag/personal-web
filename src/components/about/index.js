import React from 'react'
import SubHeading from 'components/subHeading/index'
import BulletPoint from 'components/bullet'
import { showOnScroll } from 'utils/functions'
import '../styles.css'

const About = () => {

  showOnScroll('about');

  return (
    <div className="about sub-content" id="about">
      <SubHeading number="00" text="About" />
      <div className='about-content body-text'>
        <p>
          Hello! My name is Batbold Gankhuyag. I am from Ulaanbaatar, Mongolia, and I am currently a Software 
          Engineer at Amazon.  
        </p>
        <p>
          Here are some of the technologies I have worked with:
          <ul>
            <BulletPoint elem={"React"}></BulletPoint>
            <BulletPoint elem={"Laravel"}></BulletPoint>
            <BulletPoint elem={"Python"}></BulletPoint>
            <BulletPoint elem={"C++"}></BulletPoint>
            <BulletPoint elem={"JavaScript"}></BulletPoint>
            <BulletPoint elem={"SQL"}></BulletPoint>
            <BulletPoint elem={"Git"}></BulletPoint>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default About;
