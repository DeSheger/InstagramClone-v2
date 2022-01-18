import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: '',
    password: '',
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        authorizationLoginHandler(state, action) {
            state.login = action.payload.login;
        },
        authorizationPasswordHandler(state, action) {
            state.password = action.payload.password;
        }
    }
});

export const {authorizationLoginHandler, authorizationPasswordHandler} = authorizationSlice.actions;
export default authorizationSlice.reducer;