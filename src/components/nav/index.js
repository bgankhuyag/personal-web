import React from 'react';
import Button from 'components/button/index'
import Logo from 'components/logo/index'
import '../styles.css'

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="nav-links">
        <a href="#about" target="blank" rel="noopener noreferrer" className="link"><span className="number">00.</span> About</a>
        <a href="#experience" target="blank" rel="noopener noreferrer" className="link"><span className="number">01.</span> Experience</a>
        <a href="#projects" target="blank" rel="noopener noreferrer" className="link"><span className="number">10.</span> Projects</a>
        <a href="#contact" target="blank" rel="noopener noreferrer" className="link"><span className="number">11.</span> Contact</a>
        <Button>Resume</Button>
      </div>
      <div className="menu" id="menu">
        <span className="link"><i className="fas fa-bars"></i></span>
      </div>
    </div>
  )
}

export default Nav
