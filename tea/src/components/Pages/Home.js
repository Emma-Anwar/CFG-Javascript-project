import React, { Component } from 'react';
import Button from '../Button';
import './Home.css';
import logo from '../TeaLogo.png';

function Home() {
  return(
    <div>
      <h2>Welcome to CFG Tea</h2>
      <p>Discover the world of tea with CFG Tea</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Home;
