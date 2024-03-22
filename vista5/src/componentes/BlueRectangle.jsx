import React from 'react';
import './BlueRectangle.css';

const BlueRectangle = () => {
  return (
    <div className="blue-rectangle-container">
      <div className="blue-rectangle left" style={{top: '-74px', left: '70px', position:'absolute'}}>Material name</div>
      <div className="blue-rectangle center" style={{top: '-74px',left: '565px', position:'absolute'}}>Percentage</div>
      <div className="blue-rectangle center" style={{top: '-74px',left: '895px', position:'absolute'}}>Characteristics</div>
      <div className="blue-rectangle right" style={{top: '-74px', right: '105px',position:'absolute'}}>Type</div>
    </div>
  );
};

export default BlueRectangle;
