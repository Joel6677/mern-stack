const mongoose = require('mongoose')

const issuanceSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipient',
    required: true
  },
  date_of_issue: {
    type: Date,
    required: true
  },
  returning_date: {
    type: Date,
    required: true
  }
});

issuanceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Issuance', issuanceSchema)