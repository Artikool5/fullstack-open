import { CountriesList } from "./CountriesList";
import { CountryInfo } from "./CountryInfo";

export function CountriesRender({ filteredCountries }) {
  const numberOfCountries = filteredCountries.length;
  const country = filteredCountries[0];

  return numberOfCountries === 0 ? (
    <></>
  ) : numberOfCountries > 10 ? (
    <p>Too many matches</p>
  ) : numberOfCountries > 1 ? (
    <CountriesList filteredCountries={filteredCountries} />
  ) : (
    <CountryInfo country={country} />
  );
}
