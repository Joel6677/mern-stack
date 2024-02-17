import { ListGroup } from 'react-bootstrap';

const Device = ({ device }) => {
    return (
      <ListGroup.Item action>{device.name}</ListGroup.Item>
    )
  }
  
  export default Device