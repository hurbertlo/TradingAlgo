export interface PutEngineButtonState {
    id:number,
    rowKey:string, 
    putBuyButton:boolean,
    putSellButton:boolean,
    putSellAllButton:boolean,
    putFBuyButton:boolean,
    putFSellButton:boolean,
    putFSellAllButton:boolean,
}

export const initialState:PutEngineButtonState = {
    id:NaN,
    rowKey:"",
    putBuyButton:false,
    putSellButton:false,
    putSellAllButton:false,
    putFBuyButton:false,
    putFSellButton:false,
    putFSellAllButton:false,
} 
