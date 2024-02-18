import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


const DeviceIssueForm = () => {
  
  const [newDevice, setNewDevice] = useState('')

    const addDevice = (event) => {
    event.preventDefault()
    const deviceObject = {
      id: devices.length + 1,
      name: newDevice,
      manufacturer: 'Intel',
      number: 123,
      recipient_id: 1,
      date_of_issue: new Date('03/25/2015'),
      returning_date: new Date('04/10/2015')
    }

    setDevices(devices.concat(deviceObject))
    setNewDevice('')
  }

  const handleDeviceChange = (event) => {
    console.log(event.target.value)
    setNewDevice(event.target.value)
  }

    return (
      <div style={{padding: 30}}>
        <Form onSubmit={addDevice}>
          <Form.Group className="mb-3" controlId="formDateOfIssue">
            <Form.Label>Date of issue</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDeviceDetails">
            <Form.Label>Device details</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="text" placeholder="Manufacturer" />
            <Form.Control type="number" placeholder="Device number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRecipientDetails">
            <Form.Label>Recipient details</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="text" placeholder="Department" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDeviceDetails">
            <Form.Label>Returning date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
        <Button type="submit">Submit</Button>
      </div>
      );
}

export default DeviceIssueForm