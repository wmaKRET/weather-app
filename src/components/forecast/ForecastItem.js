const ForecastItem = ({ data, dayOfTheWeek }) => {
    const weather = data.weather[0]
    const temp = data.main.temp
    return (
        <div className="forecast-item">
            <div>
                <img
                    className="forecast-item__icon"
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                />
                <p className="forecast-item__day">{dayOfTheWeek}</p>
            </div>
            <p className="forecast-item__description">{weather.description}</p>
            <p className="forecast-item__temp">{`${Math.round(temp)}°C`}</p>
        </div>
    )
}

export default ForecastItem