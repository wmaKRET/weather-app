import { useState } from "react"
import SearchBox from "./components/SearchBox"

import { WEATHER_API_URL, WEATHER_API_KEY } from "./api"
import './scss/app.scss'

const App = () => {
  const [weather, setWeather] = useState(null)

  const handleChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )

   Promise.resolve(currentWeatherFetch)
      .then(async response => {
        const weatherResponse = await response.json()
        setWeather({city: searchData.label, ...weatherResponse})
      })
      .catch(err => console.error(err))
  }

  console.log(weather)

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchBox onSearchChange={handleChange} />
    </div>
  )
}

export default App
