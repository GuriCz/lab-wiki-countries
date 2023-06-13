import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      <h1>Country List</h1>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <Link to={`/countries/${country.alpha3Code}`}>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital[0]}</p>
            <p>Region: {country.region}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;