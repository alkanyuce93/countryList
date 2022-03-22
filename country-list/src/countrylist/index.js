import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryList(props) {
  const [countries, setCountries] = useState([]);
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(
        (response) => setCountries(response.data) && setCapitals(response.data)
      )
      .catch((error) => console.log({ error }));
  }, []);
  // console.log(countries);
  // console.log(countries.capital);
  return (
    countries
      .filter((country) => {
        let countriesArr = countries && capitals;
        if (props.search.length >= 3)
          countriesArr = country.name.common
            .toLowerCase()
            .includes(props.search.toLowerCase());
        return countriesArr;
      })
      // console.log(capitals);
      // return capitals
      //   .filter((capital) => {
      //     let capitalsArr = capitals;
      //     if (props.capitalSearch.length >= 3)
      //       capitalsArr = capital
      //         .toLowerCase()
      //         .includes(props.capital.toLowerCase());
      //     return capitalsArr;
      //   })
      //   .map((capital) => {
      //     return <div key={capital} className="capital"></div>;
      //   })
      .map((country) => {
        return (
          <div key={country.name.common} className="country">
            <div onClick={() => props.onClick(country)}>
              <img src={country.flags.png} alt={country.name.common} />
              <div>
                <p>Bulunduğu Kıt'a:{country.continents}</p>
              </div>
            </div>
            <div>
              <h3>Ülke Adı:{country.name.common}</h3>
              <p>Başkenti:{country.capital}</p>
              <p>Ülkenin Resmi Adı: {country.name.official}</p>
              <p>
                Para Birimi:
                {country.currencies
                  ? Object.values(country.currencies)[0].name
                  : "ALKAN"}
              </p>
            </div>
          </div>
        );
      })
  );
}

export default CountryList;
