import BarTitle from "./BarTitle";

function ForecastItem({ index, date, weather, icon, temperature, chanceOfRain }) {
    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const day = new Date(date).getDay();

    return (
        <div className="flex items-center justify-between px-medium py-large border-b dark:border-dark-logo border-light-logo last:border-none">
            <p>
                {index==0 ? 'Today' : dayArray[day]}
            </p>
            <div className="flex gap-2 items-center">
                {icon}
                <p className="dark:text-dark-textActive text-light-textActive">
                    {weather}
                </p>
            </div>
            <p>
                <span className="dark:text-dark-textActive text-light-textActive">{temperature}&deg;</span>
                <span>/{chanceOfRain}%</span>
            </p>
        </div>
    )
}

function SevenDayForecast({ forecastData }) {
    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col">
            <div className="flex justify-between">
                <BarTitle text={'7-DAY FORECAST'} />
            </div>

            <div className="flex flex-col">
                {
                    forecastData.map((day, index) => {
                        return (
                            <ForecastItem key={index}
                                index={index}
                                date={day.date}
                                weather={day.day.condition.text}
                                temperature={day.day.avgtemp_c}
                                chanceOfRain={day.day.daily_chance_of_rain}
                                icon={<img src={day.day.condition.icon} alt={day.day.condition.text} className='min-w-12 max-w-12' />} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SevenDayForecast;