const nodemailer = require('nodemailer')

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
    }

    async send(to, subject, text) {
        try {
            await this.transporter.sendMail({
                from: process.env.EMAIL_USER,
                to,
                subject,
                text
            })

            console.log(`Email sent to ${to}`)
        } catch (error) {
            console.error('Email sending failed:', error.message)
        }
    }
}

module.exports = EmailService
