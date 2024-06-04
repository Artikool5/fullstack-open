import WeatherInfo from "./WeatherInfo";

export function CountryInfo({ country }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>{country.name.common}</h1>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Area: {country.area.toLocaleString()}</p>
      <p>Languages:</p>
      <ul>
        {Object.values(country.languages).map((lang, i) => {
          return <li key={i}>{lang}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <WeatherInfo latlon={country.capitalInfo.latlng} />
    </div>
  );
}
