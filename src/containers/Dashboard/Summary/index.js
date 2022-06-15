import React, { useEffect, useState } from 'react';
import BudgetTracking from './BudgetTracking';
import ExpenseSummary from './ExpenseSummary';
import Networth from './Networth';
import apiController from '../../../api'
import './style.scss';

const Summary = () => {
    const [datas, setData] = useState({ data: { netWorth: "", chartData: "" } });

    useEffect(() => {
        const getDashboardData = async () => {
            const data = await apiController.getDashboardData();
            setData({ data: data })
        }
        getDashboardData();
    }, [])

    return (
        <div className="">
            <Networth netWorth={ datas.data.netWorth } chartData={ datas.data.chartData.netWorthGrowth }/>
            <ExpenseSummary />
            <BudgetTracking />
        </div>
    )
}

export default Summary