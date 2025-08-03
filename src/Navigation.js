import "./Navigation.css";
import login from "./Login.png";
import logo from "./logo1.svg";
import Welcome from "./welcome";
import { useRef, useState } from "react";
import Modal from './loginModal'; // 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavSearch from "./Search";

function Navigation()
{

    // const [message, setMessage] = useState("");

    // const handleClick = () => {
    //     setMessage("Hi, How Are You?");
    // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };


    return(
    <div className="nav">
        <Link type="button" className="logoBtn" to="/" > 
            <img src={logo} alt="Logo" className="logo"/>
        </Link>
        
        <NavSearch/>

        <div className="divBtn">
            <Link className="navButtonStyle" style={{ textDecoration: 'none' }} to="/SpinnerBtn">Menu</Link>
            <Link className="navButtonStyle" style={{ textDecoration: 'none' }} to="/help">Help</Link>
            <button type="button" className="navButtonStyle1" onClick={openModal}>
                <img src={login} alt="login" className="icon1" onClick={openModal}/>
                <span> Login</span>
            </button>
            <Link style={{ textDecoration: 'none' }} className="navButtonStyle" to="/DataTable">About</Link>
             
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        {/* {message && <p>{message}</p>} */}
    </div>
    );
    
}
export default Navigation;