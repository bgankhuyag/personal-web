import React, { useState, useEffect } from 'react';
import Header from 'components/header'
import Nav from 'components/nav'
import Links from 'components/links'
import Menu from 'components/menu'
import Experience from 'components/experience/index'
import About from 'components/about/index'
import Projects from 'components/projects/index'
import './styles.css'

const Home = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 3000);
  }, []);

  const handleClose = () => {
    var menu = document.getElementById("menu-links");
    var content = document.getElementById("content");
    menu.classList.remove("open");
    menu.classList.add("close");
    menu.classList.add("close-animation");
    content.classList.remove("blur");
  }

  const handleOpen = () => {
    var menu = document.getElementById("menu-links");
    var content = document.getElementById("content");
    menu.classList.remove("close");
    menu.classList.remove("close-animation");
    menu.classList.add("open");
    content.classList.add("blur");
  }

  window.addEventListener('click', function(e){
    if (document.getElementById('menu-links')) {
      if (!document.getElementById('menu-links').contains(e.target)){
        if (document.getElementById('menu-links').classList.contains("open")) {
          handleClose();

        }
      }
    }
    if (document.getElementById('menu')) {
      if (document.getElementById('menu').contains(e.target)){
        handleOpen();
      }
    }
  });

  return (
    <div>
      {
        load ?
        <div className='loading'>
          <div className='load-logo'>
            <span className='logo'>BG</span>
          </div>
        </div>
        :
        <div  className="home">
          <Links position="fixed" />
          <div className="content" id="content">
            <Nav />
            <Header />
            <About />
            <Experience />
            <Projects />
          </div>
          <Menu handleClose={handleClose} />
        </div>       
      }
    </div>
  )
}

export default Home;
