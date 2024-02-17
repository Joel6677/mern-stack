import Device from './components/Device'
import { useState } from 'react'

const App = (props) => {

  const [devices, setDevices] = useState(props.devices)
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
    <div>
      <h1>Devices</h1>
      <ul>
        {devices.map(device => 
          <Device key={device.id} device={device} />
        )}
      </ul>
      <form onSubmit={addDevice}>
        <input 
        value={newDevice}
        onChange={handleDeviceChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}
export default App
