import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../features/container/containerSlice";
import authorizationSlice from "../features/authorization/authorizationSlice";
import sessionSlice from "../features/session/sessionSlice";

export const store = configureStore({
    reducer: {
        container: containerSlice,
        authorization: authorizationSlice,
        session: sessionSlice,
    }
})



