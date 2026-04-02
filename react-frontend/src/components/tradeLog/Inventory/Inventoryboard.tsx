import React from 'react'
import Inventory from './Inventory'

function Inventoryboard() {
    const [inventory,setInventory]=React.useState([0,1,2])
    return (
        <div className='boardContainer'>
        <table className='panel'>
        <thead>
            <tr>
                <th className='boardHeader'>Security</th>
                <th className='boardHeader'>Quantity</th>
                <th className='boardHeader'>Quantity on Trade</th>
            </tr>
        </thead>
        <tbody>
            {
                inventory.map((id)=>(
                <Inventory/>
                ))
            }
        </tbody> 
        </table> 
        </div>
  )
}

export default Inventoryboard