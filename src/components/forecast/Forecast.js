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
    
    return (
        <div className="forecast">
            <h1>Daily</h1>
            {<ForecastItem data={forecastData[0]}/>}
        </div>
    )
}

export default Forecast