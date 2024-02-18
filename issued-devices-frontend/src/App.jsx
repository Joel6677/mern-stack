import Device from './components/Device'
import DeviceIssueForm from './components/DeviceIssueForm'
import Devices from './components/Devices'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

import { useState } from 'react'

import {
  Routes,
  Route,
  useMatch
} from "react-router-dom"

const App = (props) => {


  const [devices, setDevices] = useState(props.devices)
  const [newDevice, setNewDevice] = useState('')

  // const addDevice = (event) => {
  //   event.preventDefault()
  //   const deviceObject = {
  //     id: devices.length + 1,
  //     name: newDevice,
  //     manufacturer: 'Intel',
  //     number: 123,
  //     recipient_id: 1,
  //     date_of_issue: new Date('03/25/2015'),
  //     returning_date: new Date('04/10/2015')
  //   }

  //   setDevices(devices.concat(deviceObject))
  //   setNewDevice('')
  // }

  // const handleDeviceChange = (event) => {
  //   console.log(event.target.value)
  //   setNewDevice(event.target.value)
  // }



  const match = useMatch('/device/:id')
  const device = match
    ? devices.find(device => device.id === Number(match.params.id))
    : null

  return (

    <div>

      <NavBar/>

      <Routes>
        <Route path="/device/:id" element={<Device device={device} />} />
        <Route path="/devices" element={<Devices devices={devices} />} />
        <Route path="/deviceIssueForm" element={<DeviceIssueForm/>} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}
export default App
