import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  counters: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload.amount;
      state.counters.filter((counter) => counter.id === payload.id)[0].value +=
        payload.amount;
    },
    decrement: (state, { payload }) => {
      const counter = state.counters.filter(
        (counter) => counter.id === payload.id
      )[0];
      if (counter.value >= payload.amount) {
        state.value -= payload.amount;
        counter.value -= payload.amount;
      }
    },
    createCounter: (state) => {
      if (state.counters.length > 0 && (state.counters.length + 1) % 4 === 0) {
        state.counters = [
          ...state.counters,
          { id: nanoid(), type: "timer", value: state.value },
        ];
      } else {
        state.counters = [
          ...state.counters,
          { id: nanoid(), type: "counter", value: state.value },
        ];
      }
      state.value += state.value;
    },
    removeCounter: (state, { payload }) => {
      state.value -= state.counters.filter(
        (counter) => counter.id === payload
      )[0].value;
      state.counters = [
        ...state.counters.filter((counter) => counter.id !== payload),
      ];
    },
  },
});

export const { increment, decrement, createCounter, removeCounter } =
  counterSlice.actions;

export const selectValue = (state) => state.counter.value;
export const selectCounters = (state) => state.counter.counters;

export default counterSlice.reducer;
