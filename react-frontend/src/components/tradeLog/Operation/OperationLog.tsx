import React from 'react'

function OperationLog() {
  return (
    <tr>
          {/*Snapshot of tde system state at tde moment of operation, including pending orders, parameter updated, inventory on action, inventory on hold */}
          <td className='record'>DateTime</td>
          <td className='record'>Action button toggled</td>
          <td className='record'>Activated Engine</td>

          <td className='record'>Keyboard Event</td>
          <td className='record'>Mouse Event</td>
          <td className='record'>Stock</td>
          <td className='record'>Security</td>
          <td className='record'>Parameter set</td>
          <td className='record'>Pending order set</td>
          <td className='record'>Pending order cancelled</td>
          <td className='record'>Inventory on Action</td>
          <td className='record'>Inventory on hold</td>
         
        </tr>
  )
}

export default OperationLog