import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../features/container/containerSlice";
import authorizationSlice from "../features/authorization/authorizationSlice";

export const store = configureStore({
    reducer: {
        container: containerSlice,
        authorization: authorizationSlice
    }
})



