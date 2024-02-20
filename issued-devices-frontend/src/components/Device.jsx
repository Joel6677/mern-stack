import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table, ListGroup } from 'react-bootstrap'

const Device = () => {

  const id = useParams().id
  const dispatch = useDispatch()
  const devices = useSelector(state => {
    return state.devices
  })
  const device = devices.find(d => d.id === id)

  if (!device) {
    return <div style={{ padding: 15 }}>Device not found</div>;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fi-FI')
  }

  return (
    <div style={{ padding: 15 }}>
      <h2>Device Information</h2>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{device.name}</td>
          </tr>
          <tr>
            <td>Manufacturer</td>
            <td>{device.manufacturer}</td>
          </tr>
          <tr>
            <td>Device Number</td>
            <td>{device.number}</td>
          </tr>
          <tr>
            <td>Issuances</td>
            <td>
              <ListGroup>
                {device.issuances.map(issuance => (
                  <ListGroup.Item key={issuance.id}>
                    Recipient: {issuance.recipient.name},{' '}
                    Date of Issue: {formatDate(issuance.date_of_issue)},{' '}
                    Returning Date: {formatDate(issuance.returning_date)}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );


}

export default Device

