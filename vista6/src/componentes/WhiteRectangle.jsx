import React from 'react';
import './WhiteRectangle.css';

const WhiteRectangle = () => {
  return (
    <div className="white-rectangle-container">
      <div className="white-rectangle left" style={{top: '-15px',left:'70px',position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle center-left" style={{top: '-54px', left:'400px', position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle center-right" style={{top: '-54px', left:'730px', position:'absolute'}}>*Lorem ipsum: dolor sit amet, 

 *consectetur adipiscing: elit. Integer
rutrum 

 *ac turpis nec: ornare.</div>
      <div className="white-rectangle right" style={{top: '-15px',left:'1060px', position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom-left" style={{top: '22px',left:'70px', position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom-center-left" style={{top: '22px',left:'400px', position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom-center-right" style={{top: '22px',left:'730px', position:'absolute'}}>*Lorem ipsum: dolor sit amet, 

*consectetur adipiscing: elit. Integer
rutrum 

*ac turpis nec: ornare.</div>
      <div className="white-rectangle bottom-right" style={{top: '22px', left:'1060px', position:'absolute'}}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom2-left" style={{top: '100px', left:'70px',position:'absolute' }}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom2-center-left" style={{top: '100px', left:'400px',position:'absolute' }}>Lorem Ipsum in dolor</div>
      <div className="white-rectangle bottom2-center-right" style={{top: '100px',left:'730px', position:'absolute'}}>*Lorem ipsum: dolor sit amet, 

*consectetur adipiscing: elit. Integer
rutrum 

*ac turpis nec: ornare.</div>
<div className="white-rectangle bottom2-right" style={{top: '100px', left:'1060px', position:'absolute'}}>Lorem Ipsum in dolor</div>
<div className='white-rectangle-short top' style={{top: '-55px', left:'1390px', position:'absolute'}}>
  <a href='www.xd.com'>see more...</a>
</div>
<div className='white-rectangle-short middle' style={{top: '23px', left:'1390px', position:'absolute'}}>
<a href='www.xd.com'>see more...</a>
</div>
<div className='white-rectangle-short bottom' style={{top: '100px', left:'1390px', position:'absolute'}}>
<a href='www.xd.com'>see more...</a>
</div>
    </div>
  );
};

export default WhiteRectangle;