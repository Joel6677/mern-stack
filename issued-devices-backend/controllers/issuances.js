const issuancesRouter = require('express').Router()
const Issuance = require('../models/issuance')


issuancesRouter.post('/', async (request, response) => {
  const { recipient, date_of_issue, returning_date } = request.body

  console.log(request.body)

  const Issuance = new Issuance({
    recipient,
    date_of_issue: new Date(date_of_issue),
    returning_date: new Date(returning_date)
  })

  const savedIssuance = await Issuance.save()

  response.status(201).json(savedIssuance)
})

issuancesRouter.get('/', async (request, response) => {
  const issuances = await Issuance.find({}).populate('recipient')
  response.json(issuances)
})

module.exports = issuancesRouter