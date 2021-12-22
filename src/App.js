import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { menuHandler } from './features/menu/menuSlice';
import Start from './containers/Start';

function App() {
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
  console.log(menu)

  return (
    <div className="wrapper">
      <Start />
    </div>
  );
}

export default App;
