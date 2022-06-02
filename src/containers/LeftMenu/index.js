import React, { useRef, useState } from 'react';
import './style.scss';
import ResizePanel from '../../components/ResizePanel';


const defaultWidth = 150;
const maxWidth = 225;
const minWidth = 100;

const LeftMenu = () => {
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
                className="wtc-left-menu"
                style={{ width: defaultWidth + 'px' }}
            >
                fasdfasdfsaf
            </div>
        </ResizePanel>
    )
}

export default LeftMenu