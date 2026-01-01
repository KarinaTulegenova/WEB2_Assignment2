const fs = require('fs-extra')
const path = require('path')

const filePath = path.join('data', 'cities.json')

class CityRepository {
    async getAll() {
        return await fs.readJson(filePath, { throws: false }) || []
    }

    async save(cities) {
        await fs.writeJson(filePath, cities, { spaces: 2 })
    }
}

module.exports = CityRepository
