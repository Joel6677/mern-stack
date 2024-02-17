import { ListGroup } from 'react-bootstrap'
import Device from './Device';

const DeviceList = ({devices}) => {

    return(
    <div style={{padding: 15}}>
        <h1>Devices</h1>
        <ListGroup variant="flush">
        {devices.map(device =>
            <Device key={device.id} device={device} />
        )}
        </ListGroup>
    </div>
    )
  
}

export default DeviceList