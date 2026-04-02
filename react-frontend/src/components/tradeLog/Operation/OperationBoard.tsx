import React from 'react'
import OperationLog from './OperationLog'

function OperationRecord() {
  const [operationLog,setOperationLog]=React.useState([0,1,2])
  return (
   <div className='boardContainer'>
    <table className='panel'>
      <thead>
        <tr>
          {/*Snapshot of the system state at the moment of operation, including pending orders, parameter updated, inventory on action, inventory on hold */}
          <th className='boardHeader'>DateTime</th>
          <th className='boardHeader'>Action button toggled</th>
          <th className='boardHeader'>Activated Engine</th>

          <th className='boardHeader'>Keyboard Event</th>
          <th className='boardHeader'>Mouse Event</th>
          <th className='boardHeader'>Stock</th>
          <th className='boardHeader'>Security</th>
          <th className='boardHeader'>Parameter set</th>
          <th className='boardHeader'>Pending order set</th>
          <th className='boardHeader'>Pending order cancelled</th>
          <th className='boardHeader'>Inventory on Action</th>
          <th className='boardHeader'>Inventory on hold</th>
         
        </tr>
      </thead>
      <tbody>
          {
            operationLog.map((id)=>(
              <OperationLog/>
            ))
          }
      </tbody> 
    </table> 
    </div>
  )
}

export default OperationRecord