import React, { useRef, useState } from 'react';
import './style.scss';
import ResizePanel from '../../components/ResizePanel';

const defaultWidth = 350;
const maxWidth = 500;
const minWidth = 250;
const ContextArea = () => {

    const containerRef = useRef(null);
    const [width, setWidth] = useState(defaultWidth);

    const handleResize = (size) => {
        containerRef.current.style.width = size.width + 'px';
    }

    const handleResizeStop = (size) => {
        setWidth(size.width);
    }

    return (
        <ResizePanel
            handleResize={handleResize}
            handleResizeStop={handleResizeStop}
            defaultWidth={defaultWidth}
            minWidth={minWidth}
            maxWidth={maxWidth}
        >
            <div
                ref={containerRef}
                className="wtc-context-sensitive"
                style={{ width: defaultWidth + 'px' }}
            >
                {`<CONTEXT SENSITIVE>`}
            </div>
        </ResizePanel>
    )
}

export default ContextArea