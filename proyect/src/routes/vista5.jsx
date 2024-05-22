import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";

export default function Vista5() {
    return (
        <div className="min-h-screen">
            <FondoAzul />
            <Navbar_ />
            <h1 className="absolute font-bold text-white mt-20 text-4xl text-center" style={{left: 560}}>Find Polymers</h1>
            <div 
        className=" bg-[#F9F7F7] absolute mt-60 ml-40" style={{width: 1200, height: 350, }}
      />
        </div>
    )
}