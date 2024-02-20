const recipientsRouter = require('express').Router()
const Recipient = require('../models/recipient')


recipientsRouter.post('/', async (request, response) => {
    const { name, department } = request.body
    
    console.log(request.body)
    console.log(department)
    
    const recipient = new Recipient({
        name,
        department,
        devices: []
    })
  
    const savedRecipient = await recipient.save()
  
    response.status(201).json(savedRecipient)
  })
  
  recipientsRouter.get('/', async (request, response) => {
    const recipients = await Recipient.find({}).populate('devices')
    console.log('rec', recipients)
    response.json(recipients)
  })

module.exports = recipientsRouter