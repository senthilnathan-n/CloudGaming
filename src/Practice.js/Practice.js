import React, { useState } from 'react';
import '../Practice.js/Practice.css'

const Practice = ({ fyfgyfg}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={`card-content ${isHovered ? 'show-text' : ''}`}>
        <h1>xiudgfuie</h1>
      </div>
    </div>
  );
};

export default Practice;
