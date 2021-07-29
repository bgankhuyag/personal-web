import React from 'react'
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
      <div className="intro">
        {intro1} <br /> <span className="name">Batbold Gankhuyag</span>. <br /> {intro2}.
      </div>
      <div className="profile">
        <img className="img" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Header;
