import React from 'react'
import TradeLog from './TradeLog'
// import { useSelector } from 'react-redux'

function JournalBoard() {
  const [tradeLog,setTradeLog]=React.useState([0,1,2])
  // const trade  tradeLog=useSelector((state:any)=>state.tradeLog)
  return (
    <div className='boardContainer'>
    <table className='panel'>
      <thead>
        <tr>
          <th className='boardHeader'>DateTime</th>
          {/* filled, partially filled, pending, cancelled, rejected */}
          <th className='boardHeader'>Status</th> 
          <th className='boardHeader'>Security</th>
          <th className='boardHeader'>Price</th>
          <th className='boardHeader'>Direction</th>
          <th className='boardHeader'>Qty</th>
          <th className='boardHeader'>Traded</th>
          <th className='boardHeader'>Outstanding</th>
          <th className='boardHeader'>Invalidated</th>
          <th className='boardHeader'>Reference</th>
          <th className='boardHeader'>CounterParty</th>
          <th className='boardHeader'>Message</th>
          
        </tr>
      </thead>
      <tbody>
          {
            tradeLog.map((id)=>(
              <TradeLog/>
            ))
          }
      </tbody> 
    </table> 
    </div>
  )
}

export default JournalBoard