import { useState } from "react";
import { CountryInfo } from "./CountryInfo";

export function CountriesList({ filteredCountries }) {
  const [openedCountries, setOpenedCountries] = useState([]);

  const handleOpenedCountries = (id) => {
    if (openedCountries.includes(id)) {
      const newCountries = openedCountries.filter((code) => code !== id);
      setOpenedCountries(newCountries);
      return;
    }

    setOpenedCountries(openedCountries.concat(id));
  };

  return (
    <div>
      {filteredCountries.map((country) => {
        return (
          <>
            <p key={country.ccn3}>
              {country.name.common}
              <button
                onClick={() => handleOpenedCountries(country.ccn3)}
                type="button"
              >
                Show
              </button>
            </p>
            {openedCountries.includes(country.ccn3) ? (
              <CountryInfo country={country} />
            ) : null}
          </>
        );
      })}
    </div>
  );
}
