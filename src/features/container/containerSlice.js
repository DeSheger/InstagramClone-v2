import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [
    {name: 'Home', value: true},
    {name: 'Explore', value: false},
    {name: 'Favourite', value: false},
    {name: 'Profile', value: false},
    {name: 'Start', value: false},
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
            console.log(changeState)
            return [...changeState]
        }   
    }
})

export const {containerHandler} = containerSlice.actions;
export default containerSlice.reducer;


