const UserRepository = require('../repositories/UserRepository')

const userRepo = new UserRepository()

class UserController {

    async addUser(req, res) {
        const { email, city } = req.body
        const users = await userRepo.getAll()
        users.push({ email, city })
        await userRepo.save(users)
        res.json({ message: 'User saved' })
    }

    async getUsers(req, res) {
        res.json(await userRepo.getAll())
    }
}

module.exports = new UserController()
