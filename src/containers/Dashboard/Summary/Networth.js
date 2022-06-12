import React, { useEffect, useState } from 'react'
import withContext from '../../../components/ContextTab'
import ToolSprites from '../../../components/ToolSprites'
import apiController from '../../../api'
import { convertToDollarFormat } from '../../../utils/helper'

const Networth = ({ openContext }) => {
  const [datas, setData] = useState({ netWorth: "" });

  const handleOpenContext = () => {
    openContext(
      <div>Hellooo</div>,
      'Networth information'
    )
  }

  useEffect(() => {
    const getDashboardData = async () => {
      const data = await apiController.getDashboardData();
      setData({ netWorth: convertToDollarFormat(data.netWorth)});
    }
    getDashboardData();
  }, [])

  return (
    <div className='nw middle-item'>
      <div className="nw-infor">
        <div className='txt-middle-title' onClick={handleOpenContext}>Networth</div>
        <div className="nw-income">
          {datas.netWorth}
          <span><i className="fa fa-eye"></i></span>
        </div>
      </div>
      <div className="nw-chart">
        chart
      </div>
      <div className="wtc-button">
        <ToolSprites spriteName={"setting"} />
      </div>
    </div>
  )
}

export default withContext(Networth)