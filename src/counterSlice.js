import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementAsync: (state) => {
      state.value += 1; 
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
