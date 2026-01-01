const fs = require('fs')
const path = require('path')

module.exports = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${req.ip}\n`

    console.log(log.trim())

    const logPath = path.join('logs', 'requests.log')
    fs.appendFileSync(logPath, log)

    next()
}
