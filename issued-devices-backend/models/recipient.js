const mongoose = require('mongoose')

const recipientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  devices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device'
  }]
})

recipientSchema.methods.toJSON = function () {
  const recipientObject = this.toObject()
  recipientObject.id = recipientObject._id.toString()
  delete recipientObject._id
  delete recipientObject.__v
  return recipientObject
};

module.exports = mongoose.model('Recipient', recipientSchema)