import React from 'react'
import Button from '../button/index'
import '../styles.css'

const Menu = ({
  handleClose
}) => {
  return (
    <div className="menu-links close" id="menu-links">
      <div className="menu-close link" onClick={handleClose}><i class="fas fa-times"></i></div>
      <div><a href="#" className="link"><span className="number">00.</span> About</a></div>
      <div><a href="#" className="link"><span className="number">01.</span> Experience</a></div>
      <div><a href="#" className="link"><span className="number">10.</span> Projects</a></div>
      <div><a href="#" className="link"><span className="number">11.</span> Contact</a></div>
      <div><Button>Resume</Button></div>
    </div>
  )
}

export default Menu;
