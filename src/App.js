import React from 'react';

import { showContainer } from './components/menu';
import { useSelector } from "react-redux";

function App() {
  const containers = useSelector(state => state.container);
  let container = showContainer(containers)
  // Component App show active container 
  return (
    <div className="wrapper">
      {container}
    </div>
  );
}

export default App;
