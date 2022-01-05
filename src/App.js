import React from 'react';

import { useSelector } from 'react-redux';
import {showContainer} from './components/menu'

function App() {
  const containers = useSelector(state => state.container);

  // Component App show active container 
  return (
    <div className="wrapper">
      {showContainer(containers)}
    </div>
  );
}

export default App;
