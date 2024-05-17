import FondoAzul from "../../components/backg";
import Navbar_ from "../../components/nbar";
import MultipleChoice from "../../components/multipleForm";
import axios from 'axios';

export default function Vista4() {
    const [searchResults, setSearchResults] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');


    const searchPolymers = async () => {

        try {

            const response = await axios.get(`Preguntar por la API`);

            setSearchResults(response.data);

        } catch (error) {

            console.error(error);

        }

    };


    return (

        <div className="min-h-screen">

          <FondoAzul />

          <Navbar_ />

          <section>

            <input

              type="text"

              placeholder="Search for polymers"

              value={searchTerm}

              onChange={(e) => setSearchTerm(e.target.value)}

            />

            <button onClick={searchPolymers}>Search</button>

            <MultipleChoice>

            </MultipleChoice>

            {searchResults.length > 0 && (

              <ul>

                {searchResults.map((polymer) => (

                  <li key={polymer.id}>{polymer.name}</li>

                ))}

              </ul>

            )}

          </section>

        </div>

    )
}
