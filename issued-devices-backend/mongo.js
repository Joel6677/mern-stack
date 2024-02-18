const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://joelheusala:${password}@cluster0.cm4zg8j.mongodb.net/deviceApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const deviceSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  number: Number,
  recipient_id: Number,
  date_of_issue: Date,
  returning_date: Date
})

const Device = mongoose.model('Device', deviceSchema)

const device = new Device({
    name: 'Laptop',
    manufacturer: 'Apple',
    number: 123,
    recipient_id: 1,
    date_of_issue: new Date('03/25/2019'),
    returning_date: new Date('04/10/2021')
})


Device.find({}).then(result => {
    result.forEach(device => {
      console.log(device)
    })
    mongoose.connection.close()
  })