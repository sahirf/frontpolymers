import Mainbg from "../../components/mainbg";
import Navbar_ from "../../components/nbar";
import Container from "../../components/rectangle";

export default function Vista1() {
      
      return (
        <div className="min-h-screen">
          <Mainbg />
          <Navbar_ />
          <section>
            <h1 className=" text-center font-bold mt-8 text-white ">The recommendation tool to generate and virtually test polymers</h1>
            <div id = "containers">
                <div className="mt-5 ml-8">
                    <Container>

                    </Container>
                </div>
            </div>
          </section>
        </div>
    )
  }