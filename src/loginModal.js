import React, { useState } from 'react';
import './loginModal.css';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedTick from './SuccessTick';

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [showTick, setShowTick] = useState(false);

  const handleButtonClick = () => {
    // Optionally auto-close the modal
    setTimeout(() => {
      onClose();
    }, 0);
  };
  

  if (!isOpen) return null; // Don't render the modal if not open

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal when clicking outside the modal content
    }
  };

  const handleClick = () =>
  {
    onClose(); 
    navigate('/about');
  }

  
  return (
    <div className='overlay' onClick={handleOverlayClick}>
      <div className='modal'>
        <h2>Log In</h2>
        {/* <button className='redbtn' onClick={onClose}>Back</button> */}
        {showTick ? (
          <AnimatedTick />
        ) : (
          <div>
          <div className='modal-content'>
          <label>User Name/Email Id</label>
          <input type='text' name='username'/>
        </div>
        <div className='modal-content'>
          <label>Password</label>
          <input type='password' name='password'/>
        </div>
        <div className='modal-link'>
          <Link to='/Register' onClick={handleClick}>New user?</Link>
        </div>
        <div className='modal-link'>
          <Link>Forgot Password?</Link>
        </div>
        <div>
          <button className='greenbtn'>Login</button>
          <button className='redbtn' onClick={handleButtonClick}>Clear</button>
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Modal;