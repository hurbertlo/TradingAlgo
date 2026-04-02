import React from 'react'
import EngineActionButton from './EngineActionButton'

function CallEngine(props:{
  id:number
  onDelete:(id:number)=>void
  reportRowState:(key:string)=>void
}) {
    console.log("callEngine is running")
  return ( 
    <tr>
      < td className='panelEntry delRow' >
        <input type="button" value={`C${props.id}`} onClick={()=>{
          props.onDelete(props.id)
          props.reportRowState(`C${props.id}`)
        }
        }></input>
      </td>
      < td className='panelEntry' ><input placeholder='stock' /></td>
      < td className='panelEntry' ><input placeholder='security'/></td>
      < td className='panelEntry issuer' >Issuer</td>
        
      < td className='panelEntry qty' ><input placeholder='bQty' className='tradingVolume'/></td>
      < td className='panelEntry qty' ><input placeholder='sQty' className='tradingVolume'/></td>
      
      < td className='panelEntry' ><input placeholder='sellV'/></td>
      < td className='panelEntry' ><input placeholder='sellR'/></td>
      < td className='panelEntry' ><input placeholder='sLmt' className='securityPriceParameter'/></td>
      < td className='panelEntry' ><input placeholder='outPrc' className='securityPriceParameter'/></td>

      < td className='panelEntry' ><input placeholder='inPrc' className='securityPriceParameter'/></td>
      < td className='panelEntry' ><input placeholder='bLmt' className='securityPriceParameter'/></td>
      < td className='panelEntry' ><input placeholder='buyR'/></td>
      < td className='panelEntry' ><input placeholder='buyV'/></td>

      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="buy"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="sell"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="sellAll"/></td>
      
      < td className='panelEntry' ><input placeholder='filled'/></td>
      < td className='panelEntry' ><input placeholder='profitG'/></td>
      < td className='panelEntry' ><input placeholder='stopL'/></td>
      
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fBuy"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fSell"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fSellAll"/></td>

    </tr>
  )
}

export default React.memo(CallEngine)