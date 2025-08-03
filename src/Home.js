import { useState } from "react";
import Modal from "./loginModal";
import './Home.css';
import SpinnerButton from "./SpinnerButton";
export default function Home(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => {
        setIsModalOpen(true); // Open modal
      };
    
      const closeModal = () => {
        setIsModalOpen(false); // Close modal
      };

    return(
      <div>
        <div className="container">
            <p style={{color:'#2e7d32',fontFamily:'sans-serif', fontSize:'18px',marginBottom:'18px',marginTop:'20px'}}>Welcome to my website</p>
            <button onClick={openModal} className="loginBtn">Log In</button>
            <SpinnerButton/>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
      </div>
        

    );
}