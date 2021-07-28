import React from 'react'
import image from '../../profile.jpeg'
import '../styles.css'

const Header = () => {
  let intro_ = Array.from('A Computer Science student');

  let intro;

  intro = intro_.map((letter, i) => {
    return <span key={i} className="letter">{letter}</span>
  });

  return (
    <div className="header">
      <div className="intro">
        Hi, I am <br /> <span className="name">Batbold Gankhuyag</span>. <br /> {intro}.
      </div>
      <div className="profile">
        <img className="img" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Header;
