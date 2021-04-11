import React from 'react';
import './style.scss'

class File extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.dragStartHandler = this.dragStartHandler.bind(this)
    }

    dragStartHandler(file, name, color) {
      console.log('Dragging', file)
      file.dataTransfer.setData("file-name", name)
      file.dataTransfer.setData("file-color", color)
    }

    render() {
      const { name, color } = this.props;

      return( 
          <div 
            style={{backgroundColor: color}}
            className={'file_container'}
            draggable="true"
            onDragStart={(ev) => this.dragStartHandler(ev, name, color)}>
              {name}
          </div>
      )
    }
}

export default File;