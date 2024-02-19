import { ListGroup, Table, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import  { useState } from 'react';
import {
    Link,
} from "react-router-dom"

const Devices = () => {

    const dispatch = useDispatch()
    const devices = useSelector(state => {
        return state.devices
    })
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDevices = devices.filter(device =>
        device.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div style={{ padding: 15 }}>
            <h2>Devices</h2>
            <Form.Group controlId="formSearch">
                <Form.Control
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </Form.Group>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDevices.map(device => (
                        <tr key={device.id}>
                            <td>
                                <Link to={`/devices/${device.id}`}>
                                    {device.name}
                                </Link>
                            </td>
                            <td>{device.number}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

}

export default Devices