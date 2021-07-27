import React from 'react'
import image from '../../profile.jpeg'
import '../styles.css'

const Header = () => {
  return (
    <div className="header">
      <div className="intro">
        <span className="letter">H</span>i, <br /> I am <span className="name">Batbold Gankhuyag</span>. <br /> A Computer Science student.
      </div>
      <div className="profile">
        <img className="profile-img" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Header;
