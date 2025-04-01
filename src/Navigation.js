import "./Navigation.css";
import search from "./searchIcon.png";
import login from "./Login.png";
import logo from "./logo1.svg";
import Welcome from "./welcome";
import { useState } from "react";
import Modal from './loginModal'; // 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation()
{

    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Hi, How Are You?");
    };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };


    return(
    <div className="nav">
        <Link type="button" className="logoBtn" onClick={handleClick}> 
            <img src={logo} alt="Logo" className="logo"/>
        </Link>
        
        <div className="searchBar">
            <div className="box">
                <form>
                    <input type="search" title="search" placeholder="Search..." className="input"/>
                </form>
            </div>
            <div className="box">
                <button type="submit" className="IconBtn">
                    <img alt="search" src={search} className="icon" />
                </button>
            </div>
            
        </div>
        <div className="divBtn">
            <button type="button" className="navButtonStyle">
                <Link className="navButtonStyle" style={{ textDecoration: 'none' }} to="/Card">Menu</Link>
            </button>
            <button type="button" className="navButtonStyle">Help</button>
            <button type="button" className="navButtonStyle1">
                <img src={login} alt="login" className="icon1" onClick={openModal}/>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
                <label> Login</label>
            </button>
            <Link style={{ textDecoration: 'none' }} className="navButtonStyle" to="./About">About</Link>
             
        </div>
        
        {message && <p>{message}</p>}
    </div>
    );
    
}
export default Navigation;