const express = require('express')
const app = express()

app.use(express.json())

let devices = [
    {
        id: 1,
        name: 'Modem',
        manufacturer: 'Intel',
        number: 123,
        recipient_id: 1,
        date_of_issue: new Date('03/25/2015'),
        returning_date: new Date('04/10/2015')

    },
    {
        id: 2,
        name: 'Laptop',
        manufacturer: 'Hp',
        number: 655,
        recipient_id: 2,
        date_of_issue: new Date('04/25/2018'),
        returning_date: new Date('04/10/2019')
    },
    {
        id: 3,
        name: 'Laptop',
        manufacturer: 'Apple',
        number: 893,
        recipient_id: 3,
        date_of_issue: new Date('07/22/2018'),
        returning_date: new Date('04/11/2020')
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/devices', (request, response) => {
    response.json(devices)
})

app.get('/api/devices/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const device = devices.find(device => device.id === id)
    console.log(device)
    if (device) {
        response.json(device)
    } else {
        response.status(404).end()
    }
})

const generateId = () => {
    const maxId = devices.length > 0
        ? Math.max(...devices.map(d => d.id))
        : 0
    return maxId + 1
  }

app.post('/api/devices', (request, response) => {

    const body = request.body

    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
  
    const device = {
      id: generateId(),
      name: body.name,
      manufacturer: body.manufacturer,
      number: body.number,
      recipient_id: body.recipient_id,
      date_of_issue: new Date(body.date_of_issue),
      returning_date: new Date(body.returning_date),
    }
    
    devices = devices.concat(device)

    console.log(devices)
  
    response.json(device)
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)