import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [
    {name: 'home', value: false},
    {name: 'explore', value: true},
    {name: 'favourite', value: false},
    {name: 'profile', value: false},
]

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuHandler(state, action) {
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

export const {menuHandler} = menuSlice.actions;
export default menuSlice.reducer;



