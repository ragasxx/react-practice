import React, { useState } from "react";

const App = () => {
  const countries = [
    {
      name: "india",
      value: "IN",
      cities: ["delhi", "gurgaon"],
    },
    {
      name: "pakistan",
      value: "PK",
      cities: ["lahore", "karachi"],
    },
    {
      name: "bangladesh",
      value: "BG",
      cities: ["dhaka", "finland"],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country.value}>
              {country.name}
            </option>
          );
        })}
      </select>
      {selectedCountry && (
        <select value={selectedCity} onChange={handleCityChange}>
          {countries
            .find((country) => country.value === selectedCountry)
            .cities.map((city, i) => {
              return (
                <option key={i} value={city}>
                  {city}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default App;
