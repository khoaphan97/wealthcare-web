import React from 'react'
import PieChart from '../../../components/PieChart'

const ExpenseSummary = ({chartData}) => {
    return (
        <div className="exSummary middle-item">
            <div className='txt-middle-title'>
                ExpenseSummary
            </div>
            <div className="exSummary-content">
                <div className='exSummary-column'>
                    <div style={{height: '100%'}} className="exSummary-columnIncome"></div>
                    <div style={{height: '60%'}}className="exSummary-columnExpense"></div>
                </div>
                <div className="exSummary-infor">
                    <div className='exSummary-inforIncome'>
                        <div>Income</div>
                        <span>$25,500,147</span>
                    </div>
                    <div className='exSummary-inforExpense'>
                        <div>Expense</div>
                        <span>$7,400,327</span>
                    </div>
                    <div className='exSummary-inforRemain'>$16,400,327</div>
                </div>
                <div className='exSummary-pieChart'>
                    <PieChart chartData={chartData}/>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSummary