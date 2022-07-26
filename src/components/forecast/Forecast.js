import ForecastItem from "./ForecastItem"

import "./forecast.scss"

const WEEK_DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const Forecast = ({ data }) => {
    const whichDayIsIt = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(whichDayIsIt, WEEK_DAYS.length)
        .concat(WEEK_DAYS.slice(0, whichDayIsIt))
    const forecastData = data.list.splice(0, 7)

    const forecastElements = forecastData.map((item, i) => (
        <ForecastItem 
            key={i}
            data={forecastData[i]} 
            dayOfTheWeek={forecastDays[i]}
        />
    ))

    return (
        <div className="forecast">
            <h1>Daily</h1>
            {forecastElements}
        </div>
    )
}

export default Forecast