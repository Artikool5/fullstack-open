export function CountriesList({ filteredCountries }) {
  return (
    <div>
      {filteredCountries.map((country) => {
        return <p key={country.ccn3}>{country.name.common}</p>;
      })}
    </div>
  );
}
