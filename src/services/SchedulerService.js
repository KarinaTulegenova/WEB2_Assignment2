const cron = require('node-cron')
const EmailService = require('./EmailService')

const emailService = new EmailService()

cron.schedule('0 9 * * *', () => {
    emailService.send('test@gmail.com', 'Morning Weather', 'Good morning weather update')
})

cron.schedule('0 22 * * *', () => {
    emailService.send(
        'test@gmail.com',
        'Tomorrow Forecast',
        'If it is cold – dress warmly. If rainy – take umbrella.'
    )
})
