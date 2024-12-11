function WeatherCard({location, temp_c, condition, chanceOfRain}) {
    return (
        <div className="px-large py-medium flex justify-between items-center">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-1">
                    <div className="dark:text-dark-textActive text-light-textActive text-3xl font-semibold">
                        {location.name}
                    </div>
                    <div className="text-sm">
                        Chance of rain: {chanceOfRain}%
                    </div>
                </div>
                <div className="dark:text-dark-textActive text-light-textActive text-5xl">
                    {temp_c}&deg;
                </div>
            </div>

            <div>
                <img src={condition.icon} alt={condition.text} className='w-48' />
            </div>
        </div>
    )
}

export default WeatherCard;