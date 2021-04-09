import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Timeline from '../components/Timeline'

const App = () => {
  return (
    <div className="App">
      <h1>Psious video editor</h1>
      
      <DndProvider backend={HTML5Backend}>
        <Timeline />
      </DndProvider>
    </div>
  );
}

export default App;
