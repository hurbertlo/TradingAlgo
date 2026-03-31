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
      < td className='panelEntry' >
        <input type="button" value={`C${props.id}`} onClick={()=>{
          props.onDelete(props.id)
          props.reportRowState(`C${props.id}`)
        }
        }></input>
      </td>
      < td className='panelEntry' ><input placeholder='stock' /></td>
      < td className='panelEntry' ><input placeholder='derivatives'/></td>
      < td className='panelEntry' >Issuer</td>
        
      < td className='panelEntry qty' ><input placeholder='bQty'/></td>
      < td className='panelEntry qty' ><input placeholder='sQty'/></td>
      
      < td className='panelEntry' ><input placeholder='sellD'/></td>
      < td className='panelEntry' ><input placeholder='sellR'/></td>
      < td className='panelEntry' ><input placeholder='sLmt'/></td>
      < td className='panelEntry' ><input placeholder='outPrc'/></td>

      < td className='panelEntry' ><input placeholder='inPrc'/></td>
      < td className='panelEntry' ><input placeholder='bLmt'/></td>
      < td className='panelEntry' ><input placeholder='buyR'/></td>
      < td className='panelEntry' ><input placeholder='buyD'/></td>

      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="buy"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="sell"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="sellAll"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fBuy"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fSell"/></td>
      < td ><EngineActionButton rowKey={`C${props.id}`} direction="call" value="fSellAll"/></td>

      < td className='panelEntry' ><input placeholder='filled'/></td>
      < td className='panelEntry' ><input placeholder='profitG'/></td>
      < td className='panelEntry' ><input placeholder='stopL'/></td>
    </tr>
  )
}

export default React.memo(CallEngine)