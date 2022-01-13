import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    username: "",
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        createSession(state, action) {
            state.isLogged = true;
            state.username = action.payload.username;
        }
    }
})

export const { createSession } = sessionSlice.actions;
export default sessionSlice.reducer;

