// NotFound.js
import React from 'react';

import './NotFound.css'; // Import the CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="emoji">😕</div>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
