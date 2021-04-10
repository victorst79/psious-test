import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import './styles.scss'

class File extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return( 
          <Draggable>
            <div className={'file_container'}>
                {this.props.name}
            </div>
          </Draggable>
        )
    }
}

export default File;