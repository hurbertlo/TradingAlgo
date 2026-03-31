import { CallEnginesActions } from "./action";
import { initialState,CallEnginesState } from "./state";
import produce from "immer"

export const callEnginesReducer =(
    state:CallEnginesState=initialState,
    action:CallEnginesActions
):CallEnginesState=>{
    if(action.type==="@@callEngines/ADDCALLENGINE"){
        
    }else if(action.type==="@@callEngines/UPDATECALLENGINE"){

    }else if(action.type==="@@callEngines/REMOVECALLENGINE"){

    }
    

    return state
}