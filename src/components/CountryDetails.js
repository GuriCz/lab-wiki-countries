import countriesData from "../countries.json";
import { useParams, Link } from 'react-router-dom'

function CountryDetails(props) {
  const { countryalpha3Code } = useParams();

  const foundCountry = countriesData.find((oneCountry) => {
    return oneCountry.alpha3Code === countryalpha3Code;
  });

  return (
    <div>
      {foundCountry && (
        <>
          <h2>{foundCountry.name.common}</h2>
          <h3>Capital: {foundCountry.capital[0]}</h3>
          <p>Region: {foundCountry.region}</p>
          <Link to="http://localhost:3000/">Back</Link>
        </>
      )}
    </div>
  )
}

export default CountryDetails;
