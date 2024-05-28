import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import MultipleChoice from "../../components/multipleForm";

import Footer from "../../components/footer";

export default function Vista2() {  
    return (
      <>
      <div className="min-h-screen">
        <FondoAzul />
        <Navbar_ />
        <section>
          <MultipleChoice>
          </MultipleChoice>
        </section>
      </div>
      <Footer/>
      </>
  )
}
