import React from "react";
import "./App.css";
import Componente1 from "./componentes/subindex";
import Background1 from "./componentes/background1";
/*<div className="logo"  style={{ marginLeft: "150px" }}>
      <img src={process.env.PUBLIC_URL + "/prueba.png"} alt="Logo"  style={{ width: "100%", height: "auto" }} />
      <h1>Logoname</h1>
      </div>*/

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ position: 'relative' }}>
      <div className="logo-container" style={{ bottom: 0, width: '10%', zIndex: 1 }}>
        <h1 style={{ position: 'absolute',left: '20px', }}>Logo Name</h1>
      </div>
      <div className="singup-container" style={{ bottom: 0, width: '10%', zIndex: 1 }}>
        <a href="www.a.com" target="_blank" rel="noopener noreferrer">
        <h1 style={{ position: 'absolute',right: '20px', cursor: 'pointer' }}>Sign in</h1>
      </a>      
      </div>
      <div className="login-container" style={{ bottom: 0, width: '10%', zIndex: 1}}>
        <a href="www.a.com" target="_blank" rel="noopener noreferrer">
        <h1 style={{ position: 'absolute',right: '200px', cursor: 'pointer' }}>Login</h1>
      </a>
      </div>
      <div className="intro-container" style={{position: 'relative', left: '0px', textAlign: 'center'}}>
      <h1 style={{ position: 'relative', left: '25%', transform: 'translateX(-50%)', marginTop: 70, marginBottom: -100, zIndex: 2 }}>
            The recommendation tool to generate and virtually test polymers 
          </h1>
        </div>
      </header>
      <Background1 style={{ zIndex: 1 }} />
      <Componente1 />
      <div className="footer-container" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 3, minHeight: '10vh', }}>
        <footer className="App-footer">
          <p style={{textAlign: "center"}}>
            © Logo name 2023 - TODOS LOS DERECHOS RESERVADOS
            <p><a href="www.a.com">Contacto y privacidad</a></p>
          </p>
          
        </footer>
        
      </div>
    </div>
  );
}

export default App;