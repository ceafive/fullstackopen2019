import React from 'react'
import axios from 'axios'

const GetWeather = ({ res, setWeather }) => {
  (async () => await axios
    .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${res[0].name}`)
    .then(res => {
      const { data } = res
      setWeather(data)
    }))()
}

//Country result
const DisplayWeather = ({ show, weather }) => {
  if (show && weather.location !== undefined)
    return (
      <>
        <h2>Weather in {weather.location.name}</h2>
        <p><span>temperature: </span><span>{weather.current.temperature} Celsius</span></p>
        <>
          {weather.current.weather_icons.map(icon => <img key={icon} src={icon} alt={icon} />)}
        </>
        <p><span>wind: </span><span>{weather.current.wind_speed} kph direction {weather.current.wind_dir}</span></p>
      </>
    )
}


export { GetWeather, DisplayWeather } 