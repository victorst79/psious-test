import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Timeline from '../components/Timeline'

export class App extends React.Component {

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div>
        <h1>Timeline</h1>
        <Timeline />
        </div>
      </DndProvider>
    )
  }
}
