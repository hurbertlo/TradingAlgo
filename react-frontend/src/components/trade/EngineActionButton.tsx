import React, { useState } from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import { callBuy, callFBuy, callFSell, callFSellAll, callSell, callSellAll } from '../../redux/callEngineButton/action'
// import { putBuy, putFBuy, putFSell, putFSellAll, putSell, putSellAll } from '../../redux/putEngineButton/action' 
// import { RootState } from '../../store'

function EngineActionButton(props:{
    value:string
    rowKey:string
    direction:string
}) {
    const [isChecked,setIsChecked]=useState(false)
    // const callEngineButton =useSelector((state:RootState)=>state.callEngineButton)
    // const putEngineButton = useSelector((state:RootState)=>state.putEngineButton)
    // const dispatch = useDispatch()
  return (
    
    <input type="button" className={isChecked?"panelEntry isChecked":"panelEntry action"} value={props.value} onClick={()=>{
        setIsChecked(isChecked=>!isChecked)
        console.log(`${props.rowKey} ${props.direction} ${props.value} ${isChecked}` )

        // if ((props.direction === "call") && (props.value === "buy")){
        //   dispatch(callBuy(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callBuy`)
        // }else if((props.direction === "call") && (props.value ==="sell")){ 
        //   dispatch(callSell(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callSell`)
        // }else if((props.direction === "call") && (props.value ==="sellAll")){
        //   dispatch(callSellAll(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callSellALl`)
        // }else if((props.direction === "call") && (props.value ==="fBuy")){
        //   dispatch(callFBuy(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callFBuy`)
        // }else if((props.direction === "call") && (props.value ==="fSell")){
        //   dispatch(callFSell(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callFSell`)
        // }else if((props.direction === "call") && (props.value ==="fsellAll")){
        //   dispatch(callFSellAll(`${props.rowKey}`))
        //   console.log(`${props.rowKey} callFSellAll`)
        // }else if((props.direction === "put") && (props.value ==="buy")){
        //   dispatch(putBuy(`${props.rowKey}`))
        //   console.log(`${props.rowKey} putBuy`)
        // }else if((props.direction === "put") && (props.value ==="sell")){
        //   dispatch(putSell(`${props.rowKey}`))
        //   console.log(`${props.rowKey} putSell`)
        // }else if((props.direction === "put") && (props.value ==="sellAll")){
        //   dispatch(putSellAll(`${props.rowKey}`))
        //   console.log(`${props.rowKey} putSellAll`)
        // }else if((props.direction === "put") && (props.value ==="fBuy")){
        //   dispatch(putFBuy(`${props.rowKey}`))
        //   console.log(`${props.rowKey}putFBuy`)
        // }else if((props.direction === "put") && (props.value ==="fSell")){
        //   dispatch(putFSell(`${props.rowKey}`))
        //   console.log(`${props.rowKey} putFSell`)
        // }else if((props.direction === "put") && (props.value ==="fSellAll")){
        //   dispatch(putFSellAll(`${props.rowKey}`))
        //   console.log(`${props.rowKey} putFSellAll`)
        // }
        

    }}></input>
    
  )
}

export default EngineActionButton