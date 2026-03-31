import { PutEngineButtonActions } from "./action";
import { PutEngineButtonState, initialState } from "./state";

export const putEngineButtonReducer = (
    state: PutEngineButtonState =initialState,
    action: PutEngineButtonActions
):PutEngineButtonState => {
        if (action.type ==='@@putEngine/BUY'){
            return{
                ...state,
                rowKey:action.rowKey,
                putBuyButton:!state.putBuyButton
            }
        }else if (action.type==='@@putEngine/SELL'){
            return{
                ...state,
                rowKey:action.rowKey,
                putSellButton:!state.putSellButton
            }
        }else if (action.type==='@@putEngine/SELLALL'){
            return{
                ...state,
                rowKey:action.rowKey,
                putSellAllButton:!state.putSellAllButton
            }
        }else if (action.type==='@@putEngine/FBUY'){
            return{
                ...state,
                rowKey:action.rowKey,
                putFBuyButton:!state.putFBuyButton
            }
        }else if (action.type==='@@putEngine/FSELL'){
            return{
                ...state,
                rowKey:action.rowKey,
                putFSellButton:!state.putFSellButton
            }
        }else if (action.type==='@@putEngine/FSELLALL'){
            return{
                ...state,
                rowKey:action.rowKey,
                putFSellAllButton:!state.putFSellAllButton
            }
        }
        
        return state
    };
