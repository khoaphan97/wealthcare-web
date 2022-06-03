import React from 'react';
import { Link } from 'react-router-dom';

export default (listItems) => {
    return listItems.map(item => ({
        key: item.key,
        label: <Link to={`/${item.key}`}>{item.label}</Link>
    }))
}