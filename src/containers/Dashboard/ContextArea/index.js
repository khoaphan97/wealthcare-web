import React, { useRef, useState } from 'react';
import './style.scss';
import ResizePanel from '../../../components/ResizePanel';
import ToolSprites from '../../../components/ToolSprites';

const defaultWidth = 350;
const maxWidth = 650;
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
                id="right-context"
                style={{ width: defaultWidth + 'px' }}
            >
                <div className="expand-btn">
                    <ToolSprites spriteName='expandRight' />
                </div>
            </div>
        </ResizePanel>
    )
}

export default ContextArea