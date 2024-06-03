export function CountryInfo({ country }) {
  return (
    <div>
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
    </div>
  );
}
