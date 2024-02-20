import { createSlice } from '@reduxjs/toolkit'

import recipientService from '../services/recipients'

const recipientSlice = createSlice({
    name: 'recipients',
    initialState: [],
    reducers: {
      appendRecipient(state, action) {
        state.push(action.payload)
      },
      setRecipients(state, action) {
        return action.payload
      }
    },
  })
  
  export const initializeRecipients = () => {
    return async dispatch => {
      const recipients = await recipientService.getAll()
      dispatch(setRecipients(recipients))
    }
  }
  
  export const createRecipient = content => {
    return async dispatch => {
      const newRecipient = await recipientService.createNew(content)
      dispatch(appendRecipient(newRecipient))
    }
  }
  
  export const { appendRecipient, setRecipients } = recipientSlice.actions
  
  export default recipientSlice.reducer
