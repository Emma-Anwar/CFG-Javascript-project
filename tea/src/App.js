import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom'
import './App.css';
import logo from './TeaLogo.png';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <h1>Welcome to CFG Tea</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;