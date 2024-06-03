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
          <details
            onToggle={() => handleOpenedCountries(country.ccn3)}
            key={country.ccn3}
            style={{
              border: "1px solid black",
              width: "24rem",
            }}
          >
            <summary
              style={{
                border: "2px solid black",
                cursor: "pointer",
                background: "lightgray",
                padding: "0.2rem 1rem",
              }}
            >
              {country.name.common}
            </summary>
            {openedCountries.includes(country.ccn3) ? (
              <CountryInfo country={country} />
            ) : null}
          </details>
        );
      })}
    </div>
  );
}
