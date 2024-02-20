import { configureStore } from '@reduxjs/toolkit'

import deviceReducer from './reducers/deviceReducer'
import recipientReducer from './reducers/recipientReducer'

const store = configureStore({
  reducer: {
    devices: deviceReducer,
    recipients: recipientReducer
  }
})

export default store