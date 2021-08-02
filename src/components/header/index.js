import React from 'react'
import Nav from '../nav/index'
import Button from '../button/index'
import image from '../../profile.jpeg'
import '../styles.css'

const Header = () => {
  let intro_1 = Array.from('Hi, I am');
  let intro_2 = Array.from('A Computer Science student');
  let intro1;
  let intro2;

  intro1 = intro_1.map((letter, i) => {
    return <span key={i} className="letter">{letter}</span>
  });

  intro2 = intro_2.map((letter, i) => {
    return <span key={i} className="letter">{letter}</span>
  });

  return (
    <div className="header">
      <Nav />
      <div className="header-content">
        <div className="intro">
          {intro1} <br /> <span className="name">Batbold Gankhuyag</span>. <br /> {intro2}. <br /> <br />
          <Button size="1rem">Contact Me</Button>
        </div>
        <div className="profile">
          <img className="img" src={image} alt="profile"/>
        </div>
      </div>
    </div>
  )
}

export default Header;
