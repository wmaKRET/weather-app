import { useState } from "react"

import { WEATHER_API_URL, WEATHER_API_KEY } from "./api"
import SearchBox from "./components/SearchBox"
import CurrentWeather from "./components/current-weather/CurrentWeather"

import './scss/app.scss'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )

   Promise.all([currentWeatherFetch, forecastFetch])
      .then(async response => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
        setWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBox onSearchChange={handleChange} />
      {weather && <CurrentWeather data={weather}/>}
    </div>
  )
}

export default App
