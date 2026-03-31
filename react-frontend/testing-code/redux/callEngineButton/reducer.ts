import { CallEngineButtonActions } from "./action";
import { CallEngineButtonState, initialState } from "./state";

export const callEngineButtonReducer = (
    state: CallEngineButtonState =initialState,
    action: CallEngineButtonActions
):CallEngineButtonState => {
        
        if (action.type ==='@@callEngine/BUY'){
            return{
                ...state,
                rowKey:action.rowKey,
                callBuyButton:!state.callBuyButton
            }
        }else if (action.type==='@@callEngine/SELL'){
            return{
                ...state,
                rowKey:action.rowKey,
                callSellButton:!state.callSellButton
            }
        }else if (action.type==='@@callEngine/SELLALL'){
            return{
                ...state,
                rowKey:action.rowKey,
                callSellAllButton:!state.callSellAllButton
            }
        }else if (action.type==='@@callEngine/FBUY'){
            return{
                ...state,
                rowKey:action.rowKey,
                callFBuyButton:!state.callFBuyButton
            }
        }else if (action.type==='@@callEngine/FSELL'){
            return{
                ...state,
                rowKey:action.rowKey,
                callFSellButton:!state.callFSellButton
            }
        }else if (action.type==='@@callEngine/FSELLALL'){
            return{
                ...state,
                rowKey:action.rowKey,
                callFSellAllButton:!state.callFSellAllButton
            }
        }
        
        return state
    };
