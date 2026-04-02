import React from 'react'

function TradeLog() {
  return (
    <tr>
        
        <td className='record'>DateTime</td>
        {/* filled, partially filled, pending, cancelled, rejected */}
        <td className='record'>Status</td> 
        <td className='record'>Security</td>
        <td className='record'>Price</td>
        <td className='record'>Direction</td>
        <td className='record'>Qty</td>
        <td className='record'>Traded</td>
        <td className='record'>Outstanding</td>
        <td className='record'>Invalidated</td>
        <td className='record'>Reference</td>
        <td className='record'>CounterParty</td>
        <td className='record'>Message</td>
          
    </tr>
  )
}

export default TradeLog