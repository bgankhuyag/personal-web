import React from 'react';
import Header from '../components/header/index'
import Nav from '../components/nav/index'
import Links from '../components/links/index'
import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <Links />
      <div className="content">
        <Nav />
        <Header />
        <Header />
        <Header />
        <Header />
      </div>
    </div>
  )
}

export default Home;
