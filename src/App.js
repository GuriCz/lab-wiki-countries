import React from 'react';
import "./App.css";
import countriesData from "./countries.json";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route
            path="/countries/:countryalpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
  );
}

export default App;