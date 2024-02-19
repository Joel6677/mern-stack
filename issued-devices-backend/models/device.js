const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
    manufacturer: String,
    number: Number,
    recipient_id: Number,
    date_of_issue: Date,
    returning_date: Date
})

deviceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Device', deviceSchema)