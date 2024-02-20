const devicesRouter = require('express').Router()

const Recipient = require('../models/recipient')
const Issuance = require('../models/issuance')
const Device = require('../models/device')

devicesRouter.get('/', async (request, response) => {
  const devices = await Device.find({}).populate({
    path: 'issuances',
    populate: {
      path: 'recipient',
      model: 'Recipient'
    }
  });
  response.json(devices)
})

devicesRouter.post('/', async (request, response) => {
  const body = request.body

  console.log('body.number: ', body.number)

  const all = await Device.find({})

  const existingDevice = await Device.findOne({ number: body.number })

  if (existingDevice) {

    const recipient = await Recipient.findById(body.recipient)

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not found' })
    }

    const issuance = new Issuance({
      recipient: recipient._id,
      date_of_issue: new Date(body.date_of_issue),
      returning_date: new Date(body.returning_date)
    });

    const savedIssuance = await issuance.save();

    existingDevice.issuances.push(savedIssuance._id)

    const updatedDevice = await existingDevice.save()

    recipient.devices = recipient.devices.concat(updatedDevice._id)
    await recipient.save()

    return response.status(201).json(updatedDevice)

  } else {

    const recipient = await Recipient.findById(body.recipient)

    if (!recipient) {
      return response.status(400).json({ error: 'Recipient not found' })
    }

    const issuance = new Issuance({
      recipient: recipient._id,
      date_of_issue: new Date(body.date_of_issue),
      returning_date:new Date(body.returning_date)
    })

    const savedIssuance = await issuance.save()

    const device = new Device({
      name: body.name,
      manufacturer: body.manufacturer,
      number: body.number,
      issuances: [savedIssuance._id]
    })

    console.log(device)

    const savedDevice = await device.save()
    recipient.devices = recipient.devices.concat(savedDevice._id)
    await recipient.save()
    response.status(201).json(savedDevice)

  }
})

devicesRouter.get('/:id', async (request, response) => {
  const device = await Device.findById(request.params.id).populate({
    path: 'issuances',
    populate: {
      path: 'recipient',
      model: 'Recipient'
    }
  })
  if (device) {
    response.json(device)
  } else {
    response.status(404).end()
  }
})

module.exports = devicesRouter