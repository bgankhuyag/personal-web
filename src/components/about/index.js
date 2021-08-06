import React from 'react'
import SubHeading from 'components/subHeading/index'
import '../styles.css'

const About = () => {

  window.addEventListener("scroll", () => {
    if (document.getElementById('about').getBoundingClientRect().top <= (window.innerHeight * 2/3) && document.getElementById('about').getBoundingClientRect().top !== 0) {
      document.getElementById('about').classList.add('appear');
    }
  });

  return (
    <div className="about" id="about">
      <SubHeading number="00" text="About" />
    </div>
  )
}

export default About;
