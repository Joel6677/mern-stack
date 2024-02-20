import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createDevice } from '../reducers/deviceReducer'
import { createRecipient } from '../reducers/recipientReducer'
import {
  useNavigate,
} from "react-router-dom"


const DeviceIssueForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addDevice = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);

    const recipientObject = {
      name: formData.get('recipientName'),
      department: formData.get('department'),
      date_of_issue: formData.get('dateOfIssue'),
      returning_date: formData.get('returningDate')
    }

    const createdRecipient = await dispatch(createRecipient(recipientObject))

    console.log(createdRecipient)

    const issuanceObject = {
      recipient: createdRecipient.payload.id,
      date_of_issue: formData.get('dateOfIssue'),
      returning_date: formData.get('returningDate'),
    }

    const deviceObject = {
      name: formData.get('name'),
      manufacturer: formData.get('manufacturer'),
      number: Number(formData.get('number')),
      recipient: createdRecipient.payload.id,
      date_of_issue: formData.get('dateOfIssue'),
      returning_date: new Date(formData.get('returningDate')),
      issuances: [issuanceObject]
    }

    console.log('device object: ', deviceObject)

    dispatch(createDevice(deviceObject))
    event.target.reset()
    navigate('/')
  }


  return (
    <div style={{ padding: 30 }}>
      <Form onSubmit={addDevice}>
        <Form.Group className="mb-3" controlId="formDateOfIssue">
          <Form.Label>Date of issue</Form.Label>
          <Form.Control type="date" name="dateOfIssue" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDeviceDetails">
          <Form.Label>Device details</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" />
          <Form.Control type="text" placeholder="Manufacturer" name="manufacturer" />
          <Form.Control type="number" placeholder="Device number" name="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRecipientDetails">
          <Form.Label>Recipient details</Form.Label>
          <Form.Control type="text" placeholder="Name" name="recipientName" />
          <Form.Control type="text" placeholder="Department" name="department" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReturningDate">
          <Form.Label>Returning date</Form.Label>
          <Form.Control type="date" name="returningDate" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default DeviceIssueForm