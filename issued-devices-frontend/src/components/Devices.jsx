import { ListGroup, Form } from 'react-bootstrap'

const Devices = ({devices}) => {

    return(
    <div style={{padding: 15}}>
        <h1>Devices</h1>
        <Form>
            <Form.Control type="text" placeholder="Search" />
        </Form>
        <ListGroup variant="flush">
        {devices.map(device =>
         <ListGroup.Item key={device.id} action href={`/device/${device.id}`}>
            {device.name}
         </ListGroup.Item>
        )}
        </ListGroup>
    </div>
    )
  
}

export default Devices