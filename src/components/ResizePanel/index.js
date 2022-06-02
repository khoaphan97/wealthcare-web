import React, { useRef, useState } from 'react'
import { Resizable } from 'react-resizable';
import './style.scss';

const ResizePanel = ({
    children,
    handleResize,
    handleResizeStop,
    defaultWidth,
    minWidth,
    maxWidth,
}) => {
    const resizeRef = useRef(null);
    const [width, setWidth] = useState(defaultWidth);

    const onResize = size => {
        handleResize(size);
        setWidth(size.width);
    }

    const onResizeStop = size => {
        handleResizeStop(size);
    }

    return (
        <Resizable
            className='wtc-resize-panel'
            axis='x'
            resizeHandles={['e', 'w']}
            width={width}
            height={0}
            minConstraints={[minWidth, 0]}
            maxConstraints={[maxWidth, 0]}
            ref={resizeRef}
            onResize={(_, e) => onResize(e.size)}
            onResizeStop={(_, e) => onResizeStop(e.size)}
        >
            {children}
        </Resizable>
    )
}

export default ResizePanel