import React, { useState } from 'react';
import './SpinnerButton.css';

function SpinnerButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Simulate async action
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="spinner-button"
    >
      {loading ? (
        <span className="spinner-container">
          <span className="spinner" />
          Loading...
        </span>
      ) : (
        'Submit'
      )}
    </button>
  );
}

export default SpinnerButton;
