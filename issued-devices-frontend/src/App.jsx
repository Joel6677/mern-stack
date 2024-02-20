import Device from './components/Device'
import DeviceIssueForm from './components/DeviceIssueForm'
import Devices from './components/Devices'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import { useState, useEffect } from 'react'
import deviceService from './services/devices'
import { initializeDevices } from './reducers/deviceReducer'
import { initializeRecipients } from './reducers/recipientReducer'
import { useSelector, useDispatch } from 'react-redux'


import {
  Routes,
  Route,
} from "react-router-dom"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeDevices())
  }, []) 


  return (

    <div>
      <NavBar/>

      <Routes>
        <Route path="/devices/:id" element={<Device/>} />
        <Route path="/devices" element={<Devices/>} />
        <Route path="/deviceIssueForm" element={<DeviceIssueForm/>} />
        <Route path="/" element={<Devices />} />
      </Routes>

    </div>
  )
}
export default App
