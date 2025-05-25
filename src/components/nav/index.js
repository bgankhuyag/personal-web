import React from 'react';
import Button from 'components/button/index'
import Logo from 'components/logo/index'
import '../styles.css'

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="nav-links">
        <a href="#about" className="link">About</a>
        <a href="#experience" className="link">Experience</a>
        <a href="#projects" className="link">Projects</a>
        <Button>Resume</Button>
      </div>
      <div className="menu" id="menu">
        <span className="link"><i className="fas fa-bars"></i></span>
      </div>
    </div>
  )
}

export default Nav
