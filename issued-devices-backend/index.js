const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const Device = require('./models/device')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/devices', (request, response) => {
    Device.find({}).then(devices => {
        response.json(devices)
    })
})

app.get('/api/devices/:id', (request, response) => {
    Device.findById(request.params.id)
    .then(device => {
      if (device) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})


app.post('/api/devices', (request, response) => {

    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({ error: 'name missing' })
      }

    const device = new Device({
        name: body.name,
        manufacturer: body.manufacturer,
        number: body.number,
        recipient_id: body.recipient_id,
        date_of_issue: new Date(body.date_of_issue),
        returning_date: new Date(body.returning_date),
    })

    device.save().then(savedDevice => {
        response.json(savedDevice)
      })
})

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)