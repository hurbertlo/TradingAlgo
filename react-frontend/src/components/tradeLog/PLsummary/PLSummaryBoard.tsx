import React from 'react'
import PLLog from './PLLog'
// import { useSelector } from 'react-redux'

function PLSummaryBoard() {
    const [pLLog,setPLLog]=React.useState([0,1,2])
  // const PLLog=useSelector((state:any)=>state.PLLog)
  return (
    <div className='boardContainer'>
    <table className='panel'>
      <thead>
        <tr>
          <th className='boardHeader'>Security</th>
          <th className='boardHeader'>Average Buy Price</th>
          <th className='boardHeader'>Total Buy Turnover</th>
          <th className='boardHeader'>Average Sell Price</th>
          <th className='boardHeader'>Total Sell Turnover</th>
          <th className='boardHeader'>Total Turnover</th>
          <th className='boardHeader'>P&L</th>
          <th className='boardHeader'>Position</th>
        </tr>
      </thead>
      <tbody>
          {
            pLLog.map((id)=>(
              <PLLog/>
            ))
          }
      </tbody> 
    </table> 
    </div>
  )
}

export default PLSummaryBoard