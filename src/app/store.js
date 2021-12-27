import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../features/container/containerSlice";

export const store = configureStore({
    reducer: {
        container: containerSlice
    }
})



