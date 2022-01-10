import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [
    {name: 'Home', value: false},
    {name: 'Explore', value: false},
    {name: 'Favourite', value: false},
    {name: 'Profile', value: false},
    {name: 'Start', value: true},
]

const containerSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        containerHandler(state, action) {
            let newState = current(state)
            
            const changeState = newState.map(item => {
                if(item.name === action.payload.name) {
                    return {name:item.name, value: true}
                } else {
                    return {name:item.name, value: false}
                }
            })

            return [...changeState]
        },
    }
})

export const {containerHandler, showContainer} = containerSlice.actions;
export default containerSlice.reducer;



