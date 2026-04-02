import React from 'react'
import OrderLog from './OrderLog'

function OrderBoard() {
  const [orderLog, setOrderLog] = React.useState([1,2,3])
  return (
    <div className='boardContainer'>
    <table className='panel'>
      <thead>
        <tr>
          <th className='boardHeader'>DateTime</th>
          <th className='boardHeader'>Security</th>
          <th className='boardHeader'>Price</th>
          <th className='boardHeader'>Direction</th>
          <th className='boardHeader'>Qty</th>
        </tr>
      </thead>
      <tbody>
          {
            orderLog.map((id)=>(
              <OrderLog/>
            ))
          }
      </tbody> 
    </table> 
    </div>
  )
}

export default OrderBoard