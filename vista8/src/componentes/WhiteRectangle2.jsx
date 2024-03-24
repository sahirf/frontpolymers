import React from 'react';

const WhiteRectangle2 = () => {
  const textStyles = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.3rem'
  }

  return (
    <div
      style={{
        width: '1400px',
        height: '600px',
        backgroundColor: 'white',
        border: '1px solid black',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        left: '30px',
        top: '100px',
        padding: '20px'
      }}
    >
      <>
        <h1>Contact</h1>
        <p style={textStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus
consectetur euismod in non ante. </p>
        <h1>Privacy and Use Politics </h1>
        <p style={textStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus
consectetur euismod in non ante.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Quisque eu tortor nec lacus consectetur euismod in non ante.

<p></p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus
consectetur euismod in non ante.
<p></p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus
consectetur euismod in non ante.Lorem ipsum dolor sit amet, consectetur adipiscing
elit. 
<p></p>Quisque eu tortor nec lacus consectetur euismod in non ante.Lorem ipsum dolor
sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus consectetur euismod in
non ante.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus
consectetur euismod in non ante.</p>
      </>
    </div>
  );
};

export default WhiteRectangle2;