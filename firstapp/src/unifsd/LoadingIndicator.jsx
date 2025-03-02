import React from 'react';
import './LoadingIndicator.css'; // Optional: CSS for loading indicator

const textStyle = {
  color: 'black',
  
};

const LoadingIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <span><h3 style={textStyle}>Looking for Answer...</h3></span>
    </div>
  );
};

export default LoadingIndicator;
