const CurrentWeatherItem = ({ label, value}) => (
    <div className="weather-bottom__list-item">
        <span className="weather-bottom__list-item__label">{label}</span>
        <span className="weather-bottom__list-item__value">{value}</span>
    </div>
)

export default CurrentWeatherItem