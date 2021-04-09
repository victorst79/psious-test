import React from 'react';
import { useDrop } from 'react-dnd';
import './style.scss'

const Track = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'file',
        drop: () => ({ name: 'track' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    }));

    return ( 
        <div className={'track-container'} ref={drop} role={'Dustbin'}>
                {props.nameTrack}
        </div>
    )
}

export default Track;