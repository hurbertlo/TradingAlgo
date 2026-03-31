import React, { useCallback, useState } from 'react'
import PutEngine from './PutEngine'
import styles from './Panel.module.scss'

function PutPanel() {
  const [putEngines,setPutEngines]=useState([0,1,2])
  const engineOnDelete =useCallback((id:number)=>setPutEngines(i=>{
                return i.filter(i=>i!==id)
              }),[])
  const rowdeleted=useCallback((key:string)=>{
                  console.log(`${key} is deleted`)
                },[])
  console.log("putPanel is running")
  return (
    <div>
    <table className='panel'>
      <thead>
        <tr>
          <th className='panelHeader addEngine'>
            <input type="button" value="+put" onClick={()=>setPutEngines(i=>{
              const newPutEngines = [...i];
              newPutEngines.push(newPutEngines.reduce((a,b)=>{
                if (a>b){
                  return a
                }else{
                  return b;
                }
              },0)+1)
              return newPutEngines
            }
            )}></input>
          </th>
          <th className='panelHeader'>stock</th>
          <th className='panelHeader'>derivatives</th>
          <th className='panelHeader'>issuer</th>

          <th className='panelHeader'>bQty</th>
          <th className='panelHeader'>sQty</th>

          <th className='panelHeader'>buyD</th>
          <th className='panelHeader'>buyR</th>
          <th className='panelHeader'>bLmt</th>
          <th className='panelHeader'>inPrc</th>

          <th className='panelHeader'>outPrc</th>
          <th className='panelHeader'>sLmt</th>
          <th className='panelHeader'>sellR</th>
          <th className='panelHeader'>sellD</th>

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
            putEngines.map((id)=>(
              <PutEngine 
              onDelete={engineOnDelete}
              reportRowState={rowdeleted}
              id={id}
              // direction="put"
              />
            ))
          } 
      </tbody> 
    </table>
    </div>
  )
}

export default PutPanel