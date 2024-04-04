import React from 'react';
import Background1 from './componentes/background1';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import BlueRectangle from "./componentes/BlueRectangle";
import WhiteRectangle from "./componentes/WhiteRectangle";
import Table1 from './componentes/Table1';
import "./App.css"

const App = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Background1 />
      </div>
      <div style={{ position: 'absolute', top: 50, left: 0, width: '100%', zIndex: 2 }}>
        <Header />
      </div>
      <div style={{ position: 'absolute', top: 400, left: 0, width: '100%', zIndex: 2 }}>
      <BlueRectangle />
      </div>
      <div style={{ position: 'absolute', top: 400, left: 0, width: '100%', zIndex: 2 }}>
      <WhiteRectangle />
      </div>
      <Table1/>
      <div style={{ position: 'absolute', top: 200, left: 0, width: '100%' }}>
        <Footer />
      </div>
      <button style={{position:'absolute', left: '1140px',top:'245px', backgroundColor: 'blue', color: 'white' }}><a href='www.xd.com'style={{color: 'white'}}>Submit</a></button>
    </div>
  );
};

export default App;