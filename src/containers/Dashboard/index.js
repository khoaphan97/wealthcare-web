import React from 'react';
import { Outlet } from 'react-router-dom';
import ContextArea from './ContextArea';
import LeftMenu from './LeftMenu';
import './style.scss';

const Dashboard = () => {
    return (
        <section className="wtc-dashboard-area">
            <LeftMenu />
            <div className="middle-content">
                <Outlet />
            </div>
            <ContextArea />
        </section>
    )
}

export default Dashboard;
