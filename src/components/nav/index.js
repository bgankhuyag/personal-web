import React, { useState } from 'react';
import '../styles.css'

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 50);
    // console.log(scroll);
  });

  return (
    <div className={scroll ? "nav" : "nav filled"}>
      <a>About</a>
      <a>Projects</a>
      <a>Contact</a>
    </div>
  )
}

export default Nav
