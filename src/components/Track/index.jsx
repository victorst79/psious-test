import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import './style.scss'

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    render() {
        return (
            <div className={'track_container'}>
                <Droppable droppableId={this.props.id}>
                        {this.props.nameTrack}
                </Droppable>
            </div>
        )
    }
}

export default Track;