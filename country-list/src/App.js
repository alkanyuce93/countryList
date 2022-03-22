import React, { useState } from "react";
import "./App.css";
import CountryList from "./countrylist/index";
import SearchForm from "./searchlist/index";
import CapitalSearchForm from "./capitalsearch";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (event) => setSearch(event.target.value);
  const oneChange = (event) => setSearch(event.target.value);
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="App">
      <h1>Ülkeler, Bayraklar ve Başkentleri</h1>

      <SearchForm search={search} onSearchChange={handleChange} />
      <br />

      {selectedCountry ? (
        <div className="App">
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
          />
          <div>Ülke Adı: {selectedCountry.name.common}</div>
          <div>Ülke Başlenti: {selectedCountry.capital} </div>
          <div>Ülkenin Resmi Adı: {selectedCountry.name.official}</div>

          <button onClick={() => setSelectedCountry()}>Geri Dön</button>
        </div>
      ) : (
        <CountryList
          search={search}
          onClick={(country) => setSelectedCountry(country)}
        />
      )}
    </div>
  );
}
export default App;
