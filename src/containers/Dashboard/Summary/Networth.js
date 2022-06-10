import React from 'react'
import withContext from '../../../components/ContextTab'
import ToolSprites from '../../../components/ToolSprites'
const Networth = ({ openContext }) => {

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
          $35,500,500
          <span><i class="fa fa-eye"></i></span>
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