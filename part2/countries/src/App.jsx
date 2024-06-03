import { useEffect, useState } from "react";
import axios from "axios";

function CountriesRender({ filteredCountries }) {
  const numberOfCountries = filteredCountries.length;
  const country = filteredCountries[0];
  return numberOfCountries === 0 ? (
    <></>
  ) : numberOfCountries > 10 ? (
    <p>Too many matches</p>
  ) : numberOfCountries > 1 ? (
    <div>
      {filteredCountries.map((country) => {
        return <p key={country.ccn3}>{country.name.common}</p>;
      })}
    </div>
  ) : (
    <div>
      <h1>{country.name.common}</h1>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {Object.values(country.languages).map((lang, i) => {
          return <li key={i}>{lang}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
}

console.log("key", import.meta.env.VITE_WEATHER_KEY);
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
