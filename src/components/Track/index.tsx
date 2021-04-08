import React from 'react';
import { useDrop } from 'react-dnd';

export const Track = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
      accept: 'box',
      drop: () => ({ name: 'Dustbin' }),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  }));
  const isActive = canDrop && isOver;
  console.log()

  return (
    <div 
      ref={drop}
      style={{
        width: "100%",
        height: "50px",
        border: "1px solid pink",
        position: "relative"
        }}>
      Track
    </div>
  );
};
export default Track;