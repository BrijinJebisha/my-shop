// AnimatedTick.jsx
import React from 'react';
import './SuccessTick.css';

export default function SuccessTick() {
  return (
    <div className='tick-container'>
      <svg className="tick" width="100" height="100" viewBox="0 0 52 52">
        <circle className="tick-circle" cx="26" cy="26" r="25" fill="none" />
        <path className="tick-check" fill="none" d="M14 27l7 7 16-16" />
      </svg>
      <div style={{ marginTop: '10px', fontSize: '18px', color: '#4caf50' }}>
        Success!
      </div>
    </div>
  );
}
