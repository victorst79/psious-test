import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd'
import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <DragDropContext>
      <App />
    </DragDropContext>
  </React.StrictMode>,
  document.getElementById('root')
);
