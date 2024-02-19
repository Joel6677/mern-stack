const devicesRouter = require('express').Router()

const Device = require('../models/device')

devicesRouter.get('/', (request, response) => {
    Device.find({}).then(devices => {
        response.json(devices)
      })
})

devicesRouter.get('/:id', (request, response, next) => {
    Device.findById(request.params.id)
        .then(device => {
            if (device) {
                response.json(device)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

devicesRouter.post('/', (request, response) => {

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
    }).catch(error => next(error))
})

module.exports = devicesRouter