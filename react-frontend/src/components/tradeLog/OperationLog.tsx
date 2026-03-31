import React from 'react'
import OperationRecord from './OperationRecord'

function OperationLog() {
  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          
          </tr>
        </thead>
        <tbody>
          {
           <OperationRecord/>
          }
        </tbody>
      </table>
    </div>
  )
}

export default OperationLog