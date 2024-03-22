import React from "react";
import "./rtext.css";
//se busca con ../ para salir de la carpeta acctual
//no puedo salir de src para importar  aqui, por lo que tengo que poner de esta manera
//Ignora las lineas de comentarios, estas lineas verdes.


function Componente1() {
  return (
    <div className="componente1" style={{ zIndex: 1 }}>
      <section className="mix-polymers" style={{ backgroundColor: '#ffffff', marginTop: '150px'}}>
      <a href="www.a.com" target="_blank" rel="noopener noreferrer">
      <div className="logo"  style={{ marginLeft: "150px" }}>
      <img src={process.env.PUBLIC_URL + "/prueba.png"} alt="Logo"  style={{ width: "100%", height: "auto" }} />
      </div>
      </a>
      <h2>Mezclar polímeros</h2>
          
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          tortor nec lacus consectetur euismod in non ante.
        </p>
        
      </section>
      <section className="search-polymers" style={{ backgroundColor: '#ffffff', marginTop: '150px' }}>
      <a href="www.a.com" target="_blank" rel="noopener noreferrer">
      <div className="logo"  style={{ marginLeft: "150px" }}>
      <img src={process.env.PUBLIC_URL + "/search.png"} alt="Logo"  style={{ width: "100%", height: "auto" }} />
      </div>
      </a>
          <h2>Buscar polímeros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          tortor nec lacus consectetur euismod in non ante.
        </p>
      </section>
      <section className="find-polymers" style={{ backgroundColor: '#ffffff', marginTop: '150px' }}>
      <a href="www.a.com" target="_blank" rel="noopener noreferrer">
      <div className="logo"  style={{ marginLeft: "150px" }}>
      <img src={process.env.PUBLIC_URL + "/flecha.png"} alt="Logo"  style={{ width: "100%", height: "auto" }} />
      </div>
      </a>
      <h2>Buscar polímeros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          tortor nec lacus consectetur euismod in non ante.
        </p>
      </section>
    </div>
  );
}

export default Componente1;