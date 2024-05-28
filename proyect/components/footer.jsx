const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 absolute bottom-0 mb-0 w-full">
        <div className="container mx-auto flex flex-col items-start">
          <h1 className="font-bold mb-2">Hecho por:</h1>
          <div className="flex flex-row flex-wrap space-x-4">
            <p>Andrés Juan Ramírez Torrez</p>
            <p>Andrés Pico</p>
            <p>Carlos Alberto Salcedo Rodríguez</p>
            <p>Iván Jafet Olivella Rodríguez</p>
            <p>Sahir Francisco Segura Serrano</p>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
