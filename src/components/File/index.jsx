import React from 'react';
import { useDrag } from 'react-dnd'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    cssFloat: 'left',
};

const File = (props) => {
    const [collected, drag, dragPreview] = useDrag(() => ({
        type: 'file',
        item: props.id,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log(dropResult)
        }
      }))


    return ( 
        <div ref={drag} style={{ ...style }}>
            {props.name}
        </div>
    )
}

export default File;