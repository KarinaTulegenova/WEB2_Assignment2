require('dotenv').config()
require('./src/services/SchedulerService')

const app = require('./src/app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
