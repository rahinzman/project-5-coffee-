import { configureStore } from '@reduxjs/toolkit'
import selectorSlice from '../features/selectorSlice'


export const store = configureStore({
  reducer: {
    selector: selectorSlice,
  },
})