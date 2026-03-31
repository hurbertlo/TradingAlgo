export interface CallEngineButtonState {
    id:number
    rowKey:string,
    callBuyButton:boolean,
    callSellButton:boolean,
    callSellAllButton:boolean,
    callFBuyButton:boolean,
    callFSellButton:boolean,
    callFSellAllButton:boolean,
}

export const initialState:CallEngineButtonState = {
    id:NaN,
    rowKey:"",
    callBuyButton:false,
    callSellButton:false,
    callSellAllButton:false,
    callFBuyButton:false,
    callFSellButton:false,
    callFSellAllButton:false,
} 

