import React, { useState } from 'react';
import Button from '../button/index'
import '../styles.css'

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 50);
  });

  return (
    <div className="nav">
      <a href="#" className="link">00. About</a>
      <a href="#" className="link">01. Experience</a>
      <a href="#" className="link">10. Projects</a>
      <a href="#" className="link">11. Contact</a>
      <Button>Resume</Button>
    </div>
  )
}

export default Nav
