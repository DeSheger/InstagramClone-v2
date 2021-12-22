import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { showContainer } from './components/menu';

function App() {
  const menu = useSelector(state => state.menu);

  // Component App show active container 
  return (
    <div className="wrapper">
      {showContainer(menu)}
    </div>
  );
}

export default App;
