import "./Footer.css"
const Footer = () => {
    return (
      <div className="footer-container" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 3, minHeight: '10vh', }}>
        <footer className="App-footer">
          <p style={{textAlign: "center"}}>
            © Logo name 2023 - TODOS LOS DERECHOS RESERVADOS
            <p><a href="www.a.com">Contacto y privacidad</a></p>
          </p>
          
        </footer>
        </div>
    );
  };
  
  export default Footer;
  