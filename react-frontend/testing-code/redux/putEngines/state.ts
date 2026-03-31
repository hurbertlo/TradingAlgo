import { PutEngineButtonState } from "../putEngineButton/state";

export interface PutEnginesState{
    rows:PutEngineButtonState[]
}

export const initialState:PutEnginesState={
    rows:[
        {
            id:0,
            rowKey:'P0',
            putBuyButton:false,
            putSellButton:false,
            putSellAllButton:false,
            putFBuyButton:false,
            putFSellButton:false,
            putFSellAllButton:false,
        },
        {
            id:1,
            rowKey:'P1',
            putBuyButton:false,
            putSellButton:false,
            putSellAllButton:false,
            putFBuyButton:false,
            putFSellButton:false,
            putFSellAllButton:false,
        },
    ]
}