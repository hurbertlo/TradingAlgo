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
      < td className='panelEntry delRow' >
          <input type="button" value={`P${props.id}`} onClick={()=>{
          props.onDelete(props.id)
          props.reportRowState(`P${props.id}`)
        }
        }></input>

      </td>
      < td className='panelEntry' ><input placeholder='stock' {...register('stock')}/></td>
      < td className='panelEntry' ><input placeholder='security' {...register('security')}/></td>
      < td className='panelEntry issuer' >Issuer</td>
        
      < td className='panelEntry qty' ><input placeholder='bQty' className='tradingVolume'{...register('bQty')}/></td>
      < td className='panelEntry qty' ><input placeholder='sQty' className='tradingVolume'{...register('sQty')}/></td>
      
      < td className='panelEntry' ><input placeholder='buyV' {...register('buyD')}/></td>
      < td className='panelEntry' ><input placeholder='buyR' {...register('buyR')}/></td>
      < td className='panelEntry' ><input placeholder='bLmt' className='securityPriceParameter' {...register('bLmt')}/></td>
      < td className='panelEntry' ><input placeholder='inPrc' className='securityPriceParameter' {...register('inPrc')}/></td>

      < td className='panelEntry' ><input placeholder='outPrc' className='securityPriceParameter' {...register('outPrc')}/></td>
      < td className='panelEntry' ><input placeholder='sLmt' className='securityPriceParameter' {...register('sLmt')}/></td>
      < td className='panelEntry' ><input placeholder='sellR' {...register('sellR')}/></td>
      < td className='panelEntry' ><input placeholder='sellV' {...register('sellV')}/></td>
   
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="buy"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="sell"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="sellAll"/></td>
      
      < td className='panelEntry' ><input placeholder='filled'/></td>
      < td className='panelEntry' ><input placeholder='profitG' {...register('profitG')}/></td>
      < td className='panelEntry' ><input placeholder='stopL' {...register('stopL')}/></td>

      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fBuy"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fSell"/></td>
      < td ><EngineActionButton rowKey={`P${props.id}`} direction="put" value="fSellAll"/></td>

    </tr>
  )
}

export default React.memo(PutEngine)