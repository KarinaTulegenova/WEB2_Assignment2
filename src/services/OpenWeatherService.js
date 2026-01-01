const axios = require('axios')
const WeatherService = require('./WeatherService')

class OpenWeatherService extends WeatherService {
    constructor(apiKey) {
        super()
        this.apiKey = apiKey
        this.url = 'https://api.openweathermap.org/data/2.5/weather'
    }

    async getWeather(city) {
        const response = await axios.get(this.url, {
            params: {
                q: city,
                appid: this.apiKey,
                units: 'metric'
            }
        })

        const d = response.data

        return {
            city: d.name,
            country: d.sys.country,
            coordinates: d.coord,
            temperature: d.main.temp,
            feels_like: d.main.feels_like,
            description: d.weather[0].description,
            icon: d.weather[0].icon,
            humidity: d.main.humidity,
            pressure: d.main.pressure,
            wind_speed: d.wind.speed,
            rain_3h: d.rain ? d.rain['3h'] : 0
        }
    }
}

module.exports = OpenWeatherService
