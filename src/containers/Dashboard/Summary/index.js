import React from 'react';
import BudgetTracking from './BudgetTracking';
import ExpenseSummary from './ExpenseSummary';
import Networth from './Networth';
import './style.scss';

const Summary = () => {
    return (
        <div className="">
            <Networth />
            <ExpenseSummary />
            <BudgetTracking />
        </div>
    )
}

export default Summary