import React from 'react';
import { Menu } from 'antd';
import './style.scss';

const { Item } = Menu;

const Navbar = () => {
    return (
        <nav className="wtc-nav">
            <div className="logo-container">
                WEALTHCARE
            </div>
            <Menu mode='horizontal'>
                <Item>dashboard</Item>
                <Item>accounts</Item>
                <Item>histories</Item>
                <Item>yearly plan</Item>
            </Menu>
        </nav>
    )
}

export default Navbar