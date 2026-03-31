import React, { useState } from 'react'
import TradeHistory from './TradeRecord'

function History() {
  const [tradeHistory,setTradeHistory]=useState([0])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fill Time</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Side</th>
            <th>Fill Qty</th>
            <th>Fill Price</th>
            <th>Fill Amount</th>
            <th>Market</th>
            <th>Currency</th>
            <th>Counterparty</th>
          </tr>
        </thead>
        <tbody>
          {
           <TradeHistory/>
          }
        </tbody>
      </table>

    </div>
  )
}

export default History