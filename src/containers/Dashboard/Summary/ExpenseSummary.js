import React from 'react'
import PieChart from '../../../components/PieChart'
import { convertToDollarFormat } from '../../../utils/helper'

const ExpenseSummary = ({chartData, expense, income}) => {
    const setHeight= (value1, value2) => {
        if (value1 >= value2) return 100
        else return ((value1/value2) * 100)
    }

    return (
        <div className="exSummary middle-item">
            <div className='txt-middle-title'>
                ExpenseSummary
            </div>
            <div className="exSummary-content">
                <div className='exSummary-column'>
                    <div style={{height: setHeight(income, expense)+'%'}} className="exSummary-columnIncome"></div>
                    <div style={{height: setHeight(expense, income)+'%'}}className="exSummary-columnExpense"></div>
                    <div className="exSummary-infor">
                        <div className='exSummary-inforIncome'>
                            <div>Income</div>
                            <span>{convertToDollarFormat(income)}</span>
                        </div>
                        <div className='exSummary-inforExpense'>
                            <div>Expense</div>
                            <span>{convertToDollarFormat(expense)}</span>
                        </div>
                        <div className='exSummary-inforRemain'>{convertToDollarFormat(income-expense)}</div>
                    </div>
                </div>
                <div className='exSummary-pieChart'>
                    <PieChart chartData={chartData}/>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSummary