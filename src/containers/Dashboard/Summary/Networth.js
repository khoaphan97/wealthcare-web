import React, { useEffect, useState } from 'react'
import withContext from '../../../components/ContextTab'
import ToolSprites from '../../../components/ToolSprites'
import apiController from '../../../api'
import { convertToDollarFormat } from '../../../utils/helper'
import { VerticalChart } from '../../../components/VerticalChart/VerticalChart'

const Networth = ({ openContext }) => {
  const [datas, setData] = useState({data: {netWorth: "", chartData: ""}});
  
  const handleOpenContext = () => {
    openContext(
      <div>Hellooo</div>,
      'Networth information'
      )
    }
    
    useEffect(() => {
      const getDashboardData = async () => {
        const data = await apiController.getDashboardData();
        // setData({ netWorth: convertToDollarFormat(data.netWorth)});
        setData({data: data})
      }
      getDashboardData();
    }, [])

    let {netWorth, chartData} = datas.data;
    // console.log("thinh" , netWorth);
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
        <div className="wtc-button">
          <ToolSprites spriteName={"setting"} />
        </div>
      </div>
    </div>
  )
}

export default withContext(Networth)