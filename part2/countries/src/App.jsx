import { useEffect, useState } from "react";
import axios from "axios";
import { CountriesRender } from "./CountriesRender";

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const responce = axios.get(
      "https://studies.cs.helsinki.fi/restcountries/api/all",
    );
    responce.then((res) => setCountries(res.data));
  }, []);

  const changeCountry = (e) => {
    setCountry(e.target.value);
    if (!e.target.value) {
      setFilteredCountries([]);
      return;
    }
    const filter = countries.filter((c) =>
      c.name.common.toLowerCase().includes(e.target.value),
    );
    setFilteredCountries(filter);
  };

  return (
    <>
      <div>
        Find countries:{" "}
        <input
          type="text"
          name="country"
          value={country}
          onChange={changeCountry}
        />
      </div>
      <CountriesRender filteredCountries={filteredCountries} />
    </>
  );
}

export default App;
