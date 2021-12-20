import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import {menuHandler} from './features/menu/menuSlice';

function App() {
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
  console.log(menu.getObjectName)
  return (
    <div className="App">
      <div className='wrapper'>
        {menu.map(item => console.log(item))}

        <button onClick={() => dispatch(menuHandler({name:'home'}))}>home</button>
      </div>
    </div>
  );
}

export default App;
