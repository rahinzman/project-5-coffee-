import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
}

export const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    selector: (state,actions) => {
        state.value = actions.payload 
    },  
  },
})

// Action creators are generated for each case reducer function
export const { selector } = selectorSlice.actions

export default selectorSlice.reducer