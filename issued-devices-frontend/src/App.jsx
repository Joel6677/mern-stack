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
