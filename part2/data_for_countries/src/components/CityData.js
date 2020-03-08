import React from 'react'
import { GetWeather } from './CityWeather'

//Handle view of single country
const DisplayCountry = ({ country, filtered, setShow, setFilter, setWeather }) => {
  const { name } = country
  const res = filtered.filter(country => country.name.toUpperCase() === name.toUpperCase())
  GetWeather({ res, setWeather })
  setFilter(res)
  setShow(true)
}

//Display countries
const CityData = ({ filtered, setFilter, setShow, setWeather }) => {
  if (filtered.length !== 1) {
    return filtered.map(country => <p key={country.name}><span>{country.name}</span> <button onClick={() => DisplayCountry({ country, filtered, setFilter, setShow, setWeather })}>show</button></p>)
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
      </div >
    )
  }
}

export default CityData