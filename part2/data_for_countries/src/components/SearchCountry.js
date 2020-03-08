import { GetWeather } from './CityWeather'

const SearchCountry = ({ event, countries, setShow, setFilter, setWeather }) => {
  event.preventDefault();
  const value = event.target.value
  const res = countries.filter(country => country.name.toUpperCase().includes(value.toUpperCase()))


  if (value.length !== 0 && res.length > 10) {
    setShow(false)
    setWeather([])
    return setFilter(["Too many matches, specify another filter"])
  } if (value.length !== 0 && res.length === 0) {
    setShow(false)
    setWeather([])
    setFilter(["No matches"])
  } else if (value.length !== 0 && res.length > 1 && res.length <= 10) {
    setShow(false)
    setWeather([])
    setFilter(res)
  } else if (value.length !== 0 && res.length === 1) {
    GetWeather({ res, setWeather })
    setFilter(res)
    setShow(true)
  } else {
    setShow(false)
    setWeather([])
    setFilter([])
  }
}

export default SearchCountry