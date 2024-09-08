import { createReducer } from '@reduxjs/toolkit'
import { setDocter, setDocters ,addDocter ,editDocter} from '../actions/docter'

export const docters = createReducer([], {
  [setDocters]: (state, action) => action.payload,
  [addDocter]: (state, action) => {
    state.push(action.payload); // Add the new doctor to the existing list
  },
  [editDocter]: (state, action) => {
    const index = state.findIndex(docter => docter.id === action.payload.id);
    if (index !== -1) {
      state[index] = action.payload; // Update the doctor in the list
    }
  }
})

export const docter = createReducer(
  {},
  {
    [setDocter]: (_, { payload }) => payload
  }
)
