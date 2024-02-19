const devicesRouter = require('express').Router()

const Recipient = require('../models/recipient')
const Device = require('../models/device')

devicesRouter.get('/',  async (request, response) => {
    const devices = await Device.find({}).populate('recipient')
    response.json(devices)
})

devicesRouter.post('/', async (request, response) => {
    const body = request.body

    console.log('body:', body)
    
    const recipient = await Recipient.findById(body.recipient)
    console.log(recipient)

    const device = new Device({
        name: body.name,
        manufacturer: body.manufacturer,
        number: body.number,
        recipient: recipient._id,
        date_of_issue: new Date(body.date_of_issue),
        returning_date: new Date(body.returning_date),
    })
  
    const savedDevice = await device.save()
    recipient.devices = recipient.devices.concat(savedDevice._id)
    await recipient.save()
    response.status(201).json(savedDevice)
  })
  
  devicesRouter.get('/:id', async (request, response) => {
    const device = await Device.findById(request.params.id)
    if (device) {
      response.json(device)
    } else {
      response.status(404).end()
    }
  })

// devicesRouter.get('/:id', (request, response, next) => {
//     Device.findById(request.params.id)
//         .then(device => {
//             if (device) {
//                 response.json(device)
//             } else {
//                 response.status(404).end()
//             }
//         })
//         .catch(error => next(error))
// })

// devicesRouter.post('/', (request, response) => {

//     const body = request.body

//     if (body.name === undefined) {
//         return response.status(400).json({ error: 'name missing' })
//     }

//     const device = new Device({
//         name: body.name,
//         manufacturer: body.manufacturer,
//         number: body.number,
//         recipient_id: body.recipient_id,
//         date_of_issue: new Date(body.date_of_issue),
//         returning_date: new Date(body.returning_date),
//     })

//     device.save().then(savedDevice => {
//         response.json(savedDevice)
//     }).catch(error => next(error))
// })

module.exports = devicesRouter