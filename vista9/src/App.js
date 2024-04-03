import React from 'react';
import Background1 from './componentes/background1';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import SearchBar from "./componentes/SearchBar";

import "./App.css"

const App = () => {
  return (
    <div style={{position: 'relative', zIndex: 1 }}>
      <div style={{position: 'relative', zIndex: 0 }}>
        <Background1 />
      </div>
      <div style={{position: 'absolute', top: 50, left: 0, width: '100%', zIndex: 2 }}>
        <Header />
      </div>
      <div style={{ position: 'relative',left: '50px',top: '-20px' }}>
         <SearchBar />
         <button style={{position:'relative', left: '370px',top:'190px', backgroundColor: 'blue', color: 'white' }}><a href='www.xd.com'style={{color: 'white'}}>Submit</a></button>
      </div>
      <h1 style={{position: 'absolute', left: '700px', top: '150px'}}>Mix Polymers</h1>
      <h3 style={{position: 'absolute', left: '5px',top: '155px'}}>
          Materials number:</h3>
      <div className="search-bar1" style={{position: 'absolute', top: '300px', left: '150px'}}>
      <input type="text" placeholder="Insert Materials" style={{fontSize: '16px'}}/>
      </div>
      <div className="search-bar2" style={{position: 'absolute', top: '300px', left: '420px'}}>
      <input type="text" placeholder="Percentage" style={{fontSize: '16px'}}/>
      </div>
      <div className="percentage" >
      <img src={process.env.PUBLIC_URL + "/percent.png"} alt="Logo"  style={{position: 'absolute', width: "3%",left: '550px' ,top: '290px' }} />
      </div>
      <div className="plus" >
      <img src={process.env.PUBLIC_URL + "/plus.png"} alt="Logo"  style={{position: 'absolute', width: "3%",left: '620px' ,top: '290px' }} />
      </div>
      <div className="search-bar1" style={{position: 'absolute', top: '300px', left: '700px'}}>
      <input type="text" placeholder="Insert Materials" style={{fontSize: '16px'}}/>
      </div>
      <div className="search-bar2" style={{position: 'absolute', top: '300px', left: '970px'}}>
      <input type="text" placeholder="Percentage" style={{fontSize: '16px'}}/>
      </div>
      <div className="percentage" >
      <img src={process.env.PUBLIC_URL + "/percent.png"} alt="Logo"  style={{position: 'absolute', width: "3%",left: '1100px' ,top: '290px' }} />
      </div>
      <button style={{position:'absolute', left: '1170px',top:'305px', backgroundColor: 'blue', color: 'white' }}><a href='www.xd.com'style={{color: 'white'}}>Submit</a></button>

      <div style={{position: 'absolute', top: 200, left: 0, width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;