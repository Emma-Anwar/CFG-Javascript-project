// Adding intro text and logo

import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Tea from './components/Pages/TeaPage/Tea';
import Product from './components/Pages/Product';
import Button from './components/Button';

function App() {
  <div>
  <h2>Welcome to CFG Tea</h2>
  <p>Discover the world of tea with CFG Tea</p>
  <Button buttonStyle='btn--primary' buttonSize='btn--large'>
    Sign up now
  </Button>
  </div>
  return (
    <>
      <Router>
        <Navbar />
        <Routes>  
          {/* Switched component to element to match implementation*/}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/components/Pages/TeaPage/Tea" element={<Tea/>} />
          <Route exact path="/components/Pages/Product" element={<Product/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;