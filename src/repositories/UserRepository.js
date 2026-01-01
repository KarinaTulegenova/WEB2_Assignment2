const fs = require('fs-extra')
const path = require('path')

const filePath = path.join('data', 'users.json')

class UserRepository {
    async getAll() {
        return await fs.readJson(filePath, { throws: false }) || []
    }

    async save(users) {
        await fs.writeJson(filePath, users, { spaces: 2 })
    }
}

module.exports = UserRepository
