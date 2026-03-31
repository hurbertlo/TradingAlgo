import React, { useCallback, useState } from 'react'
import CallEngine from './CallEngine'
import styles from './Panel.module.scss'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../../store'

function CallPanel() {
  const [callEngines,setCallEngines]=useState([0,1,2])
  // const callPanel = useSelector((state:RootState)=>state.callPanel)
  // const dispatch = useDispatch()
  const engineOnDelete =useCallback((id:number)=>setCallEngines(i=>{
                  return i.filter(i=>i!==id)
                }),[])
  const rowdeleted=useCallback((key:string)=>{
                  console.log(`${key} is deleted`)
                },[])
  console.log("callPanel is running")
  return (
    <div>
    <table className='panel'>
      <thead>
        <tr>
          <th className='panelHeader addEngine'>
            <input type="button" value="+call" onClick={()=>setCallEngines(i=>{
              const newCallEngines = [...i];
              newCallEngines.push(newCallEngines.reduce((a,b)=>{
                if (a>b){
                  return a;
                }else{
                  return b;
                }
              },0)+1)
              return newCallEngines
            }
            )}></input>
          </th>
          <th className='panelHeader'>stock</th>
          <th className='panelHeader'>derivatives</th>
          <th className='panelHeader'>issuer</th>

          <th className='panelHeader'>bQty</th>
          <th className='panelHeader'>sQty</th>

          <th className='panelHeader'>sellD</th>
          <th className='panelHeader'>sellR</th>
          <th className='panelHeader'>sLmt</th>
          <th className='panelHeader'>outPrc</th>

          <th className='panelHeader'>inPrc</th>
          <th className='panelHeader'>bLmt</th>
          <th className='panelHeader'>buyR</th>
          <th className='panelHeader'>buyD</th>

          <th className='panelHeader'>buy</th>
          <th className='panelHeader'>sell</th>
          <th className='panelHeader'>sellAll</th>
          <th className='panelHeader'>fBuy</th>
          <th className='panelHeader'>fSell</th>
          <th className='panelHeader'>fSellAll</th>

          <th className='panelHeader'>filled</th>
          <th className='panelHeader'>profitG</th>
          <th className='panelHeader'>stopL</th>  
        </tr>
      </thead>
      <tbody>
          {
            callEngines.map((id)=>(
              <CallEngine 
              onDelete={engineOnDelete}
              reportRowState={rowdeleted}
              id={id}
              // direction="call"
              />
            ))
          }
      </tbody> 
    </table> 
    </div>
  )
}

export default CallPanel
