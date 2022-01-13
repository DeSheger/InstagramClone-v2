import React from 'react';

import { showContainer } from './components/menu';
import { useSelector } from "react-redux";

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
