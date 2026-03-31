import React from 'react'
import EngineActionButton from './EngineActionButton'
import {useForm}from 'react-hook-form'
function PutEngine(props:{
  id:number;
  onDelete:(id:number)=>void
  reportRowState:(key:string)=>void
  }) {
  console.log("putEngine is running")
  const{register} = useForm()
  return (
    <tr>
      < td className='panelEntry' >
          <input type="button" value={`P${props.id}`} onClick={()=>{
          props.onDelete(props.id)
          props.reportRowState(`P${props.id}`)
        }
        }></input>

      </td>
      < td className='panelEntry' ><input placeholder='stock' {...register('stock')}/></td>
      < td className='panelEntry' ><input placeholder='derivatives' {...register('derivatives')}/></td>
      < td className='panelEntry' >Issuer</td>
        
      < td className='panelEntry qty' ><input placeholder='bQty' {...register('bQty')}/></td>
      < td className='panelEntry qty' ><input placeholder='sQty' {...register('sQty')}/></td>
      
      < td className='panelEntry' ><input placeholder='buyD' {...register('buyD')}/></td>
      < td className='panelEntry' ><input placeholder='buyR' {...register('buyR')}/></td>
      < td className='panelEntry' ><input placeholder='bLmt' {...register('bLmt')}/></td>
      < td className='panelEntry' ><input placeholder='inPrc' {...register('inPrc')}/></td>

      < td className='panelEntry' ><input placeholder='outPrc' {...register('outPrc')}/></td>
      < td className='panelEntry' ><input placeholder='sLmt' {...register('sLmt')}/></td>
      < td className='panelEntry' ><input placeholder='sellR' {...register('sellR')}/></td>
      < td className='panelEntry' ><input placeholder='sellD' {...register('sellD')}/></td>
   
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="buy"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="sell"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="sellAll"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fBuy"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fSell"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fSellAll"/></td>

      < td className='panelEntry' ><input placeholder='filled'/></td>
      < td className='panelEntry' ><input placeholder='profitG' {...register('profitG')}/></td>
      < td className='panelEntry' ><input placeholder='stopL' {...register('stopL')}/></td>
    </tr>
  )
}

export default React.memo(PutEngine)