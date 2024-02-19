import { createSlice } from '@reduxjs/toolkit'

import deviceService from '../services/devices'

const deviceSlice = createSlice({
    name: 'devices',
    initialState: [],
    reducers: {
      appendDevice(state, action) {
        state.push(action.payload)
      },
      setDevices(state, action) {
        return action.payload
      }
    },
  })
  
  export const initializeDevices = () => {
    return async dispatch => {
      const devices = await deviceService.getAll()
      dispatch(setDevices(devices))
    }
  }
  
  export const createDevice = content => {
    return async dispatch => {
      const newDevice = await deviceService.createNew(content)
      dispatch(appendDevice(newDevice))
    }
  }
  
  export const { appendDevice, setDevices } = deviceSlice.actions
  
  export default deviceSlice.reducer
