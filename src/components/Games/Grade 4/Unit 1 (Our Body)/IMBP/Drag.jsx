import React from 'react';
import ReactDOM from 'react-dom';
import { useDrag } from 'react-dnd';

function Drag({ name }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'part',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='optionBox' ref={dragRef}>
            {name}
        </div>
    )
}

export default Drag;