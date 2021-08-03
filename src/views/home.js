import React from 'react';
import Header from '../components/header/index'
import Nav from '../components/nav/index'
import Links from '../components/links/index'
import Menu from '../components/menu/index'
import './styles.css'

const Home = () => {
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
      if (document.getElementById('menu-links').contains(e.target)){
        // Clicked in box
      } else{
        // Clicked outside the box
        handleClose();
      }
    }
    if (document.getElementById('menu')) {
      if (document.getElementById('menu').contains(e.target)){
        // Clicked in box
        handleOpen();
      }
    }
  });

  return (
    <div className="home">
      <Links />
      <div className="content" id="content">
        <Nav />
        <Header />
        <Header />
        <Header />
        <Header />
      </div>
      <Menu handleClose={handleClose} />
    </div>
  )
}

export default Home;
