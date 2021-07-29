import React from 'react';
import Header from '../components/header/index'
import Nav from '../components/nav/index'
import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="content">
        <Header />
      </div>
    </div>
  )
}

export default Home;
