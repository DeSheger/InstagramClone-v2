import { createSlice } from "@reduxjs/toolkit";

// first we must create initial state for our action
const initialState = { value: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;
        },
        reset(state) {
            state.value = 0;
        }
    }
})

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;
