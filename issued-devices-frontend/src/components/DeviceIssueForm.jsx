import { useState } from 'react'
import { Form } from 'react-bootstrap'


const DeviceIssueForm = () => {

    return (
      <div style={{padding: 30}}>
        <Form>
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
      </div>
      );
}

export default DeviceIssueForm