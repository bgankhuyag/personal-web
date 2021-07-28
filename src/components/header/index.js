import React from 'react'
import image from '../../profile.jpeg'
import '../styles.css'

const Header = () => {
  const intro_1 = Array.from("Hi");
  let intro_2 = Array.from("I am");
  let intro_3 = Array.from("Batbold Gankhuyag");
  let intro_4 = Array.from('A Computer Science student');

  let intro1;
  let intro2 = []
  let intro3 = []
  let intro4 = []

  let i = 0;
  intro1 = intro_1.map((letter) => {
    i++;
    return <span key={i} className="letter">{letter}</span>
  });

  intro2 = intro_2.map((letter) => {
    i++;
    return <span key={i} className="letter">{letter}</span>
  });

  intro3 = intro_3.map((letter) => {
    i++;
    return <span key={i} className="letter">{letter}</span>
  });

  intro4 = intro_4.map((letter) => {
    i++;
    return <span key={i} className="letter">{letter}</span>
  });

  console.log(intro1);


  return (
    <div className="header">
      <div className="intro">
        {intro1} <br /> {intro2} <span className="name">{intro3}</span>. <br /> {intro4}.
      </div>
      <div className="profile">
        <img className="img" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Header;
