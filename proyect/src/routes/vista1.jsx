import Navbar_ from "../../components/nbar";
import logo from '../assets/Bg.png'; // Importa la imagen aquí


export default function Vista1() {
  return (
    <section className="contenido-principal bg-b min-h-dvh" style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Navbar_ />

      <div className="container w-full mx-auto min-h-[calc(100dvh_-_80px)] p-5">
        <h1 className=" text-center font-bold text-4xl mt-8 text-white " >The recommendation tool to generate and virtually test polymers</h1>
        <div className="w-full flex flex-col md:flex-row gap-20 mt-20 justify-center py-10">

          <a href="/mix_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/flask.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Mix Polymers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tortor nec lacus consectetur euismod in non ante.</p>
            </div>
          </a>

          <a href="/search_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/glass.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Search For Polymers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                tortor nec lacus consectetur euismod in non ante.</p>
            </div>
          </a>

          <a href="/find_polymers">
            <div className="bg-white p-6 flex flex-col gap-4 h-96 shadow-lg relative pt-16 rounded-lg">
              <div className="size-24 absolute right-1/2 translate-x-1/2 top-[-48px] p-2 rounded-full bg-white shadow-md shadow-sky-700">
                <img src={"/right.png"} alt="" className="p-1" />
              </div>
              <h3 className="text-4xl font-weight text-center text-blue-400 font-bold ">Find Polymers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
                tortor nec lacus consectetur euismod in non ante.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}