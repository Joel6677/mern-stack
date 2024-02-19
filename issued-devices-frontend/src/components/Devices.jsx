import { ListGroup, Table, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
    Link,
  } from "react-router-dom"

const Devices = () => {

    const dispatch = useDispatch()
    const devices = useSelector(state => {
      return state.devices
    })

    return(
    <div style={{padding: 15}}>
    <h2>Devices</h2>
    <Table striped>
      <tbody>
        {devices.map(device =>
          <tr key={device.id}>
            <td>
              <Link to={`/devices/${device.id}`}>
                <p>{device.name}</p>
                <p>{device.number}</p>
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
    </div>
    )
  
}

export default Devices