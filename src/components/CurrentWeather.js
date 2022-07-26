const CurrentWeather = ({ data }) => {
    const weather = data.weather[0]
    const weatherData = data.main
    const windSpeed = data.wind.speed
    const cloudiness = data.clouds.all
    return (
        <div className="weather">
            <div className="weather-top">
                <div>
                    <p className="weather-top__cityname">{data.city}</p>
                    <p className="weather-top__description">{weather.main}</p>
                </div>
                <img
                    className="weather-top__icon"
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                />
            </div>
            <div className="weather-bottom">
                <p className="weather-bottom__temp">{Math.round(weatherData.temp)}°C</p>
                <div className="weather-bottom__list">
                    <p className="weather-bottom__list-header">Details</p>
                    <div className="weather-bottom__list-item">
                        <span className="weather-bottom__list-item__label">Feels like</span>
                        <span className="weather-bottom__list-item__value">{Math.round(weatherData.feels_like)} °C</span>
                    </div>
                    <div className="weather-bottom__list-item">
                        <span className="weather-bottom__list-item__label">Humidity</span>
                        <span className="weather-bottom__list-item__value">{weatherData.humidity} %</span>
                    </div>
                    <div className="weather-bottom__list-item">
                        <span className="weather-bottom__list-item__label">Clouds</span>
                        <span className="weather-bottom__list-item__value">{cloudiness} %</span>
                    </div>
                    <div className="weather-bottom__list-item">
                        <span className="weather-bottom__list-item__label">Wind</span>
                        <span className="weather-bottom__list-item__value">{windSpeed} m/s</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather