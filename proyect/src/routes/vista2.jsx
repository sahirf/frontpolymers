import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import MultipleChoice from "../../components/multipleForm";
// import axios from 'axios';

export default function Vista2() {
 

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.get('51.222.143.27:5000/')
  //     const result = response.data
  //     console.log(result)

  //   } catch (error) {
  //     console.error('Error sending data to API:', error);
  //   }
  // };
    
    return (
      <div className="min-h-screen">
        <FondoAzul />
        <Navbar_ />
        <section>
          <MultipleChoice>
          </MultipleChoice>
        </section>
      </div>
  )
}
