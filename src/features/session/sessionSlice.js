import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    username: "",
    userID: null,
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        createSession(state, action) {
            state.isLogged = true;
            state.username = action.payload.username;
            state.userID = action.payload.userID;
        }
    }
})

export const { createSession } = sessionSlice.actions;
export default sessionSlice.reducer;

