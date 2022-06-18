import React from 'react'
import withContext from '../../../components/ContextTab'
import ToolSprites from '../../../components/ToolSprites'
import { convertToDollarFormat } from '../../../utils/helper'
import { VerticalChart } from '../../../components/VerticalChart/VerticalChart'

const Networth = ({ openContext, netWorth, chartData }) => {

  const handleOpenContext = () => {
    openContext(
      <div>Hellooo</div>,
      'Networth information'
      )
    }

  return (
    <div className='nw middle-item'>
      <div className="nw-infor">
        <div className='txt-middle-title' onClick={handleOpenContext}>Networth</div>
        <div className="nw-income">
          {convertToDollarFormat(netWorth)}
          <span><i className="fa fa-eye"></i></span>
        </div>
      </div>
      <div className="nw-chart">
        <div className="nw-chart-vertical">
          <VerticalChart dataChart = {chartData}/>
        </div>
      </div>
      <div className="wtc-button">
        <ToolSprites spriteName={"setting"} />
      </div>
    </div>
  )
}

export default withContext(Networth)