import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { showContainer } from './features/container/containerSlice'


function App() {
  const containers = useSelector(state => state.container);
  const dispatch = useDispatch();

  // Component App show active container 
  return (
    <div className="wrapper">
      {dispatch(showContainer(containers))}
    </div>
  );
}

export default App;
