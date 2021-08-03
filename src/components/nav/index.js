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
      <a href="#" className="link"><span className="number">00.</span> About</a>
      <a href="#" className="link"><span className="number">01.</span> Experience</a>
      <a href="#" className="link"><span className="number">10.</span> Projects</a>
      <a href="#" className="link"><span className="number">11.</span> Contact</a>
      <Button>Resume</Button>
    </div>
  )
}

export default Nav
