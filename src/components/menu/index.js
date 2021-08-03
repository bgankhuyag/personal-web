import React from 'react'
import Button from '../button/index'
import '../styles.css'

const Menu = () => {
  return (
    <div className="menu-links">
      <span className="link"><i class="fas fa-times"></i></span>
      <a href="#" className="menu-link"><span className="number">00.</span> About</a>
      <a href="#" className="menu-link"><span className="number">01.</span> Experience</a>
      <a href="#" className="menu-link"><span className="number">10.</span> Projects</a>
      <a href="#" className="menu-link"><span className="number">11.</span> Contact</a>
      <Button>Resume</Button>
    </div>
  )
}

export default Menu;
