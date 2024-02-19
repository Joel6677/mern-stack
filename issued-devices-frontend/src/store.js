import { configureStore } from '@reduxjs/toolkit'

import deviceReducer from './reducers/deviceReducer'

const store = configureStore({
  reducer: {
    devices: deviceReducer,
  }
})

export default store