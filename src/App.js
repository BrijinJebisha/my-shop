import logo from './logo1.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import React from 'react';
import Navigation from './Navigation';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <nav>
        <Navigation/>
      </nav>
      <Routes>
        <Route path="/Navigation" element={<Navigation/>} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
