import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {menuHandler} from './features/menu/menuSlice';

function App() {
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
  console.log(menu.getObjectName)
  return (
    <div className="app">
      <div className='wrapper'>
        
      </div>
    </div>
  );
}

export default App;
