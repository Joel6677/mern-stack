const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: String,
    number: {
        type: Number,
        unique: true,
        required: true
    },
    issuances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issuance'
    }]
});

deviceSchema.methods.toJSON = function () {
    const recipientObject = this.toObject()
    recipientObject.id = recipientObject._id.toString()
    delete recipientObject._id
    delete recipientObject.__v
    return recipientObject
};

module.exports = mongoose.model('Device', deviceSchema)