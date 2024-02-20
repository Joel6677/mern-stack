import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import recipientService from '../services/recipients'


export const createRecipient = createAsyncThunk(
    'recipients/createRecipient',
    async (content, thunkAPI) => {
      try {
        const newRecipient = await recipientService.createNew(content)
        return newRecipient
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )

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
  
  
  export const { appendRecipient, setRecipients } = recipientSlice.actions
  
  export default recipientSlice.reducer
