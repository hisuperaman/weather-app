import config from "./config"

const fetchIp = async () => {
    const response = await fetch(`${config.serverURL}/get_ip`, {
        method: 'get'
    })
    if(!response.ok) {
        throw new Error('Error fetching weather data')
    }
    return response.json();
}

export const fetchWeatherData = async () => {
    const ipResponse = await fetchIp();

    const response = await fetch(`${config.serverURL}/forecast_weather?q=${ipResponse.ip}`, {
        method: 'get'
    })
    if(!response.ok) {
        throw new Error('Error fetching weather data')
    }
    return response.json();
}

export const fetchWeatherDataById = async (id) => {
    const response = await fetch(`${config.serverURL}/forecast_weather?q=id:${id}`, {
        method: 'get'
    })
    if(!response.ok) {
        throw new Error('Error fetching weather data')
    }
    return response.json();
}