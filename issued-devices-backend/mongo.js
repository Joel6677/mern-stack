const mongoose = require('mongoose');

// Check if the password is provided
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument.');
  process.exit(1);
}

// Get the password from command-line arguments
const password = process.argv[2];

// MongoDB connection URL
const url = `mongodb+srv://joelheusala:${password}@cluster0.cm4zg8j.mongodb.net/deviceApp?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema for Issuance
const issuanceSchema = new mongoose.Schema({
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipient' },
    date_of_issue: Date,
    returning_date: Date
});

// Define schema for Device
const deviceSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    device_number: { type: String, unique: true },
    issuances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Issuance' }]
});

// Define schema for Recipient
const recipientSchema = new mongoose.Schema({
    name: String,
    department: String,
    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }]
});

// Create models based on schemas
const Issuance = mongoose.model('Issuance', issuanceSchema);
const Device = mongoose.model('Device', deviceSchema);
const Recipient = mongoose.model('Recipient', recipientSchema);

// Create a new device
const deviceData = {
    name: 'Laptop',
    manufacturer: 'Apple',
    device_number: '123456',
    issuances: [] // No initial issuances
};

// Create a new recipient
const recipientData = {
    name: 'John Doe',
    department: 'IT',
    devices: [] // No initial devices
};

// Function to insert data into the database
async function insertData() {
    try {
        // Create new device
        const device = new Device(deviceData);
        const savedDevice = await device.save();
        console.log('Device saved successfully:', savedDevice);

        // Create new recipient
        const recipient = new Recipient(recipientData);
        const savedRecipient = await recipient.save();
        console.log('Recipient saved successfully:', savedRecipient);

        // Close the MongoDB connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

// Insert data into the database
insertData();
