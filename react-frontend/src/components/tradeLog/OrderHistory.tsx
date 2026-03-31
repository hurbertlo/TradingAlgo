import React, { useState } from 'react'
import OrderRecord from './OrderRecord'

function OrderHistory() {
  const [orderHistory,setOrderHistory]=useState([0])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Time</th>
            <th>Trading Status</th>
            <th>Stock</th>
            <th>Derivatives</th>
            <th>Side</th>
            <th>Order Qty</th>
            <th>Order Price</th>
            <th>Order Amount</th>

            <th>sellD</th>
            <th>sellR</th>
            <td>sLmt</td>
            <td>outPrc</td>

            <td>inPrc</td>
            <td>bLmt</td>
            <td>buyR</td>
            <td>buyD</td>

            <td>buy</td>
            <td>sell</td>
            <td>sellAll</td>
            <td>fBuy</td>
            <td>fSell</td>
            <td>fSellAll</td>

            <td>filled</td>
            <td>profitG</td>
            <td>stopL</td>
            
          </tr>
        </thead>
        <tbody>
          {
           <OrderRecord/>
          }
        </tbody>
      </table>

    </div>
  )
}

export default OrderHistory