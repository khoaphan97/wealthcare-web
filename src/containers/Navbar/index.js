import React from 'react';
import { Menu } from 'antd';
import './style.scss';
import {  Link } from 'react-router-dom';
import useCreateNavigation from '../../hooks/useCreateNavigation';

const navList= [
    {
        key: 'dashboard',
        label: 'dashboard',
    },
    {
        key: 'accounts',
        label: 'accounts',
    },
    {
        key: 'histories',
        label: 'histories',
    },
    {
        key: 'yearly-plan',
        label: 'yearly planasdasd',
    }
]

const Navbar = () => {
    const navListItems = useCreateNavigation(navList);
    return (
        <nav className="wtc-nav">
            <div className="logo-container">
                WEALTHCARE
            </div>
            <Menu mode='horizontal' items={navListItems} />
        </nav>
    )
}

export default Navbar