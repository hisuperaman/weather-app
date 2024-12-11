import { useEffect, useState, useTransition } from "react";
import AirConditions from "./components/AirConditions";
import SearchBar from "./components/SearchBar";
import SevenDayForecast from "./components/SevenDayForecast";
import TodayForecast from "./components/TodayForecast";
import WeatherCard from "./components/WeatherCard";
import { use } from "react";
import { fetchWeatherDataById } from "../api";


function HomePage({ weatherDataPromise, setWeatherDataPromise }) {
    const [currentWeather, setCurrentWeather] = useState(null);
    const weatherData = use(weatherDataPromise);


    function handleResultItemClick(id) {
        const newWeatherDataPromise = fetchWeatherDataById(id);
        setWeatherDataPromise(newWeatherDataPromise)
    }

    useEffect(() => {
        if (weatherData) {
            setCurrentWeather(weatherData);
        }
    }, [weatherDataPromise])


    return (
        <>
        {
            currentWeather && (
                <>
                    <div className="flex flex-col gap-small w-full flex-1 sm:min-w-[60%]">
                        <SearchBar onResultItemClick={handleResultItemClick} />
        
                        <div className="flex flex-col gap-small min-w-[300px]">
                            <WeatherCard location={currentWeather.location} temp_c={currentWeather.current.temp_c} condition={currentWeather.current.condition} chanceOfRain={currentWeather.forecast.forecastday[0].day.daily_chance_of_rain} />
                            <TodayForecast forecastDay={currentWeather.forecast.forecastday[0].hour} />
                            <AirConditions realFeel={currentWeather.current.feelslike_c} wind={currentWeather.current.wind_kph} chanceOfRain={currentWeather.forecast.forecastday[0].day.daily_chance_of_rain} uv={currentWeather.current.uv} />
                        </div>
                    </div>
        
                    <div className="flex-1 lg:mt-20">
                        <SevenDayForecast forecastData={currentWeather.forecast.forecastday} />
                    </div>
                </>
            )
        }
        </>
    )
}

export default HomePage;