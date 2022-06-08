import React from 'react'
import Button from 'components/button/index'
import image from 'images/profile.jpeg'
import '../styles.css'

const Header = () => {
  return (
    <div className="header">
      <div className="intro">
        <p className='greeting'>Hi, I am</p> 
        <h2 className="name highlight">Batbold Gankhuyag</h2> 
        <p className='greeting' style={{marginBottom: '20px'}}>a Software Development Engineer at <span className='highlight'>Amazon</span>.</p>
        <Button size="1rem">Contact Me</Button>
      </div>
      <div className="profile">
        <img className="img" src={image} alt="profile"/>
      </div>
    </div>
  )
}

export default Header;
