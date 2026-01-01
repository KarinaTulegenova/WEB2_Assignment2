const OpenWeatherService = require('../services/OpenWeatherService')
const CityRepository = require('../repositories/CityRepository')

const weatherService = new OpenWeatherService(process.env.API_KEY)
const cityRepo = new CityRepository()

class WeatherController {

    async getAll(req, res) {
        const cities = await cityRepo.getAll()
        const data = await Promise.all(
            cities.map(city => weatherService.getWeather(city))
        )
        res.json(data)
    }

    async getOne(req, res) {
        const data = await weatherService.getWeather(req.params.city)
        res.json(data)
    }

    async add(req, res) {
        const { city } = req.body
        const cities = await cityRepo.getAll()
        cities.push(city)
        await cityRepo.save(cities)
        res.json({ message: 'City added' })
    }

    async update(req, res) {
        const cities = await cityRepo.getAll()
        cities.reverse()
        await cityRepo.save(cities)
        res.json({ message: 'City order updated' })
    }

    async delete(req, res) {
        let cities = await cityRepo.getAll()
        cities = cities.filter(c => c !== req.params.city)
        await cityRepo.save(cities)
        res.json({ message: 'City deleted' })
    }
}

module.exports = new WeatherController()
