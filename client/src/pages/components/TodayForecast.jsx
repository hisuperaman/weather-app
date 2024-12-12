import BarTitle from "./BarTitle";

function TodayForecastItem({ time, temperature, icon }) {
    const formattedTime = new Date(time);
    const timeHour = formattedTime.getHours();
    let timeHourString = new String(timeHour%12).padStart(2, '0');
    timeHourString = timeHourString=='00' ? '12' : timeHourString;
    const timeString = `${timeHourString}:00 ${timeHour>=12 ? 'PM' : 'AM'}`;

    return (
        <div className="text-sm px-large flex flex-col gap-2 items-center border-r last:border-none dark:border-dark-logo border-light-logo">
            <div>{timeString}</div>
            <div>{icon}</div>
            <div className="dark:text-dark-textActive text-light-textActive text-lg font-semibold">
                {temperature}&deg;
            </div>
        </div>
    )
}

function TodayForecast({ forecastDay }) {
    const filteredForecastDay = forecastDay.filter((hour, index) => {
        const currentDate = new Date();
        const targetDate = new Date(hour.time);
        console.log(currentDate.getHours(), targetDate.getHours())
        return targetDate.getHours() >= currentDate.getHours()
    })

    return (
        <div className="dark:bg-dark-primary bg-light-primary rounded-medium p-large flex flex-col gap-medium">
            <BarTitle text={"TODAY'S FORECAST"} />

            <div className="flex overflow-x-auto">
                {
                    filteredForecastDay.length>0 ? (filteredForecastDay.map((hour, index) => {
                        return (
                            <TodayForecastItem key={hour.time_epoch} time={hour.time} temperature={hour.temp_c} icon={<img src={hour.condition.icon} alt={hour.condition.text} className='min-w-20 max-w-20' />} />
                        )
                    }))
                    : (
                        <p className="dark:text-dark-textActive text-light-textActive">
                            Today's forecast has ended. Check tomorrow's forecast for updated information.
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default TodayForecast;