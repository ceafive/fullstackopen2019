import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchCountry from './components/SearchCountry'
import CityData from './components/CityData'
import { DisplayWeather } from './components/CityWeather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [filtered, setFilter] = useState([])
  const [show, setShow] = useState(false)

  //Fetch persons from database
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setCountries(res.data)
      })
  }, [])


  return (
    <div>
      <h2>Country Data</h2>
      find countries: <input onChange={(event) => SearchCountry({ event, countries, setShow, setFilter, setWeather })} />
      <>
        {CityData({ filtered, setFilter, setShow, setWeather })}
      </>
      <>
        {DisplayWeather({ show, weather })}
      </>
    </div>
  )
}

export default App