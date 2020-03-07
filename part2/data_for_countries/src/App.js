import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFilter] = useState([])

  //Fetch persons from database
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data)
      })
  }, [])

  //Handler for search results
  const searchCountry = (e) => {
    e.preventDefault();
    const value = e.target.value
    const res = countries.filter(country => country.name.toUpperCase().includes(value.toUpperCase()))

    if (value.length !== 0 && res.length > 10) {
      return setFilter(["Too many matches, specify another filter"])
    } else if (value.length !== 0 && res.length > 1 && res.length <= 10) {
      return setFilter(res)
    } else if (value.length !== 0 && res.length === 1) {
      return setFilter(res)
    } else {
      return setFilter([])
    }
  }

  const displayResults = () => {
    if (filtered.length !== 1) {
      return filtered.map(country => <p key={country.name}>{country.name}</p>)
    } else if (typeof filtered[0] === 'string' && filtered.length === 1) {
      return <p>{filtered[0]}</p>
    } else {
      return filtered.map(country =>
        <div key={country.name}>
          <>
            <h1>{country.name}</h1>
            <p><span>capital</span>&nbsp;<span>{country.capital}</span></p>
            <p><span>population</span>&nbsp;<span>{country.population}</span></p>
          </>
          <>
            <h2>languages</h2>
            <ul>
              {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
          </>
          <>
            <img src={country.flag} alt={country.name}></img>
          </>
        </div>
      )
    }
  }

  return (
    <div>
      <h2>Country Data</h2>
      find countries: <input onChange={searchCountry} />
      <>
        {displayResults()}
      </>
    </div>
  )
}

export default App