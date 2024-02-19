import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

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

  return (
    <div style={{ padding: 15 }}>
      <h2>Device information</h2>
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
            <td>Device number</td>
            <td>{device.number}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )

}

export default Device

