import React, { useRef, useState } from 'react';
import './style.scss';
import ResizePanel from '../../../components/ResizePanel';
import { Menu } from 'antd';
import useCreateNavigation from '../../../hooks/useCreateNavigation';


const defaultWidth = 280;
const maxWidth = 350;
const minWidth = 130;

const dashboardList = [
    {
        key: 'dashboard/summary',
        label: 'summary',
    },
    {
        key: 'dashboard/budget-management',
        label: 'budget management',
    },
    {
        key: 'dashboard/expense-records',
        label: 'expense records',
    }
]

const LeftMenu = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(defaultWidth);
    const dashboardMenuItems = useCreateNavigation(dashboardList);

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
                <Menu items={dashboardMenuItems} />
            </div>
        </ResizePanel>
    )
}

export default LeftMenu