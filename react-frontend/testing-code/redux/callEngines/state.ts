import { CallEngineButtonState } from "../callEngineButton/state";

export interface CallEnginesState{
    engineButtonSet:CallEngineButtonState[]
}

export const initialState:CallEnginesState={
    engineButtonSet:[
        {
            id:0,
            rowKey:'C0',
            callBuyButton:false,
            callSellButton:false,
            callSellAllButton:false,
            callFBuyButton:false,
            callFSellButton:false,
            callFSellAllButton:false,
        },
       {
            id:1,
            rowKey:'C1',
            callBuyButton:false,
            callSellButton:false,
            callSellAllButton:false,
            callFBuyButton:false,
            callFSellButton:false,
            callFSellAllButton:false,
        }, 
    ]
}