import logo from './logo1.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import React from 'react';
import Navigation from './Navigation';
import DataTable from './apicall';
import Help from './help';
import Register from './Register';
import Loading from './loading';
import AnimatedTick from './SuccessTick';
import Home from './Home';
import Failed from './Cross';
import SuccessTick from './SuccessTick';
import SpinnerButton from './SpinnerButton';

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
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <nav>
        <Navigation/>
      </nav>
      <main style={{ flex: 1}}>
          <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Cross' element={<Failed/>}/>
        <Route path="/Navigation" element={<Navigation/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/DataTable" element={<DataTable/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/loading" element={<Loading/>}/>
        <Route path='/tick' element={<SuccessTick/>}/>
        <Route path='/SpinnerBtn' element={<SpinnerButton/>}/>
      </Routes>
      </main>
      
      <footer>
        <p style={{backgroundColor: 'white',
          color: 'black',
          textAlign: 'center',
          padding: '15px 0',
          position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999}}>This is the footer.</p>
      </footer>
      </div>
      
    </Router>
  );
}

export default App;
