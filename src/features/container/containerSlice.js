import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import Home from "../../containers/Home";
import Start from "../../containers/Start";
import Favourite from "../../containers/Favourite";


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
            console.log(state,action)
            const changeState = newState.map(item => {
                if(item.name === action.payload.name) {
                    return {name:item.name, value: true}
                } else {
                    return {name:item.name, value: false}
                }
            })
            console.log(changeState)
            return [...changeState]
        },
        showContainer(state){
            let newState = current(state)
            console.log(newState)
            const findActiveContainer = newState.map(container => {
              if (container.value) {
                switch (container.name) {
                  case 'Start':
                    return <Start />;
                  case 'Home':
                    return <Home />;
                  case 'Favourite':
                    return <Favourite />;
                  default:
                    return undefined;
                }
              }
            });
            const createNewState = findActiveContainer.filter(item => item !== undefined)
            console.log(createNewState)
            return createNewState[0];
        }

    }
})

export const {containerHandler, showContainer} = containerSlice.actions;
export default containerSlice.reducer;



